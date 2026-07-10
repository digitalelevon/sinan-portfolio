

import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
You are DigiBot, the professional AI assistant of Sinan MC Malappuram, Freelance Web Developer and SEO Specialist.

OUTPUT RULES — ABSOLUTE PRIORITY:
1. NEVER reveal internal reasoning, chain of thought, planning steps, or analysis.
2. NEVER output labels such as: "Plan:", "Reasoning:", "Analysis:", "Thought:", "Wait,", "Let's think", "I will...", "First,", "Step 1:", "Final Plan:", "The user is...", "Response structure:", or similar internal text.
3. NEVER output <think> tags, <tool_call> tags, function JSON, or XML tool syntax.
4. ALWAYS produce ONLY the final user-facing answer — nothing else.

PRIMARY GOAL:
Collect client contact details FIRST before any general conversation.

CRITICAL RULES:

You MUST follow this exact order:

STEP 1 — ALWAYS FIRST MESSAGE:

Ask EXACTLY:

"Hi! I'm DigiBot, an AI assistant. How can I help you today? Are you looking for web development, SEO, or digital marketing services?"

Do NOT say anything else.

WAIT for user reply.

STEP 2 — AFTER REPLY TO FIRST MESSAGE:

Acknowledge their response briefly, then ask EXACTLY:

"What is your name?"

WAIT.

STEP 3 — AFTER NAME:

Accept ANY name without judgment.

Reply EXACTLY:

"Please provide your phone number."

WAIT.

STEP 4 — AFTER PHONE:

Reply EXACTLY:

"Please provide your email address."

WAIT.

STEP 5 — AFTER EMAIL:

You MUST ask EXACTLY:

"Which service are you looking for? (Web Development, SEO, or Digital Marketing)"

WAIT for the user to reply with their chosen service.

STEP 6 — AFTER SERVICE:

Once the user replies with the service (and ONLY then), you MUST call the function \`save_lead\` with the collected details (name, phone, email, and the specific service they requested). DO NOT output any text response, just trigger the function call. The system will handle sending the thank you message.

IMPORTANT RULES:

1. DO NOT skip Steps 1 through 5. You MUST ask each question one by one and WAIT for the user's reply.
2. DO NOT call the \`save_lead\` function until the user has explicitly answered the service question in Step 5. Do not guess or assume the service.
3. DO NOT output function call syntax like 'save_lead(...)' as normal text. Only use the provided tool.
4. If you have already collected the details and the user is asking general questions, DO NOT try to call save_lead again.
5. DO NOT start normal conversation before collecting details.
6. ALWAYS follow the step-by-step lead capture flow first.

After lead capture is complete, you may answer general questions about web development, SEO, digital marketing, pricing, timelines, portfolio, and related topics.

Always be professional and friendly.

`;

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const messages: { role: string; content: string }[] = body.messages || [];

        // Check if the success message was already sent to avoid duplicate saves in the same session
        const alreadySaved = messages.some(
            (msg) => msg.role === "assistant" && msg.content && (
                msg.content.includes("Thank you") && 
                (msg.content.includes("saved") || msg.content.includes("contact"))
            )
        );

        // Adjust the system prompt if the lead has already been captured during this session
        const systemPromptWithMode = alreadySaved 
            ? `${systemPrompt}\n\nLEAD CAPTURE COMPLETED:\nThe user's details have been successfully collected and saved. You must now act as a helpful conversational assistant. Do NOT ask for the user's contact details (name, phone, email, or service) again. Answer all follow-up questions normally using your professional knowledge.`
            : systemPrompt;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const completionParams: any = {
            model: "qwen/qwen3.6-27b",
            messages: [
                { role: "system", content: systemPromptWithMode },
                ...messages,
            ],
        };

        // Check if the AI has asked the service question in the recent messages
        const hasAskedService = messages.some(
            (msg) => msg.role === "assistant" && msg.content && (msg.content.includes("Which service are you looking for") || msg.content.includes("Web Development, SEO, or Digital Marketing"))
        );

        if (!alreadySaved && hasAskedService) {
            completionParams.tools = [
                {
                    type: "function",
                    function: {
                        name: "save_lead",
                        description: "Save the user's contact details. ONLY call this when you have collected ALL 4 DETAILS: name, phone, email, and the service they are interested in.",
                        parameters: {
                            type: "object",
                            properties: {
                                name: { type: "string", description: "The user's name" },
                                phone: { type: ["string", "number"], description: "The user's phone number" },
                                email: { type: "string", description: "The user's email address" },
                                service: { type: "string", description: "The requested service: Web Development, SEO, or Digital Marketing" }
                            },
                            required: ["name", "phone", "email", "service"]
                        }
                    }
                }
            ];
            completionParams.tool_choice = "auto";
        }

        let response;
        try {
            response = await groq.chat.completions.create(completionParams);
        } catch (error) {
            // Groq models sometimes return the raw function string which causes an API error.
            // We can gracefully handle it by parsing the failed generation if available.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const err = error as any;
            const failedGen = err?.error?.error?.failed_generation || err?.error?.failed_generation || err?.failed_generation;

            if (failedGen && failedGen.includes("<function=save_lead>")) {
                try {
                    const extractParameter = (xml: string, paramName: string): string => {
                        const regex = new RegExp(`<parameter=${paramName}>([\\s\\S]*?)<\\/parameter>`, "i");
                        const match = xml.match(regex);
                        return match ? match[1].trim() : "";
                    };

                    const name = String(extractParameter(failedGen, "name") || "Unknown");
                    const phone = String(extractParameter(failedGen, "phone") || "Unknown");
                    const email = String(extractParameter(failedGen, "email") || "Unknown");
                    const service = String(extractParameter(failedGen, "service") || "Unknown");

                    try {
                        await addDoc(collection(db, "chat_leads"), {
                            name,
                            phone,
                            email,
                            service,
                            status: "new",
                            source: "chatbot_ai",
                            createdAt: serverTimestamp()
                        });
                    } catch (dbError) {
                        console.error("Firestore save failed in fallback tool call:", dbError);
                        return NextResponse.json({
                            message: "I'm sorry, I encountered an error while saving your details. Please try again later."
                        });
                    }

                    return NextResponse.json({
                        message: "Thank you! Your details have been saved successfully. Sinan MC Malappuram will contact you shortly."
                    });
                } catch (parseError) {
                    console.error("Failed to parse XML-like fallback generation:", parseError);
                }
            }

            // Continue the chat by retrying without tools instead of returning HTTP 500
            console.warn("Groq API error, retrying without tools to continue chat:", error);
            try {
                const fallbackParams = { ...completionParams };
                delete fallbackParams.tools;
                delete fallbackParams.tool_choice;
                response = await groq.chat.completions.create(fallbackParams);
            } catch (fallbackError) {
                console.error("Fallback API call failed:", fallbackError);
                return NextResponse.json({
                    message: {
                        role: "assistant",
                        content: "I'm sorry, I'm having trouble connecting right now. Can you please repeat that?"
                    }
                });
            }
        }

        const choice = response.choices[0];
        const message = choice.message;

        let extractedLead: any = null;
        let isToolCallDetected = false;

        // 1. Detect native tool calls
        if (message.tool_calls && message.tool_calls.length > 0) {
            const toolCall = message.tool_calls[0];
            if (toolCall.function.name === "save_lead") {
                isToolCallDetected = true;
                try {
                    extractedLead = JSON.parse(toolCall.function.arguments || "{}");
                } catch (parseError) {
                    console.error("Failed to parse native tool call arguments:", parseError);
                }
            }
        }

        // 2. Detect text-based tool calls in message.content
        const textContent = message.content || "";
        const hasTextToolCall = textContent.includes("<tool_call>") || textContent.includes("<function=");

        if (!isToolCallDetected && hasTextToolCall) {
            isToolCallDetected = true;
            
            // Try to parse JSON from <tool_call>...</tool_call>
            const jsonMatch = textContent.match(/<tool_call>([\s\S]*?)<\/tool_call>/i);
            if (jsonMatch) {
                try {
                    const innerText = jsonMatch[1].trim();
                    const parsed = JSON.parse(innerText);
                    extractedLead = parsed.arguments || parsed;
                } catch (e) {
                    // Not JSON inside the tags
                }
            }

            // Fallback to XML parameter tag extraction
            if (!extractedLead) {
                const extractParameter = (xml: string, paramName: string): string => {
                    const regex = new RegExp(`<parameter=${paramName}>([\\s\\S]*?)<\\/parameter>`, "i");
                    const match = xml.match(regex);
                    return match ? match[1].trim() : "";
                };

                const parsedName = extractParameter(textContent, "name");
                const parsedPhone = extractParameter(textContent, "phone");
                const parsedEmail = extractParameter(textContent, "email");
                const parsedService = extractParameter(textContent, "service");

                if (parsedName || parsedPhone || parsedEmail || parsedService) {
                    extractedLead = {
                        name: parsedName,
                        phone: parsedPhone,
                        email: parsedEmail,
                        service: parsedService
                    };
                }
            }
        }

        if (isToolCallDetected) {
            let serviceTerm = "SEO";
            if (extractedLead) {
                const name = String(extractedLead.name ?? "Unknown");
                const phone = String(extractedLead.phone ?? "Unknown");
                const email = String(extractedLead.email ?? "Unknown");
                const service = String(extractedLead.service ?? "Unknown");
                if (service && service !== "Unknown") {
                    serviceTerm = service;
                }

                try {
                    await addDoc(collection(db, "chat_leads"), {
                        name,
                        phone,
                        email,
                        service,
                        status: "new",
                        source: "chatbot_ai",
                        createdAt: serverTimestamp()
                    });
                } catch (dbError) {
                    console.error("Firestore save failed in tool call execution:", dbError);
                    return NextResponse.json({
                        message: "I'm sorry, I encountered an error while saving your details. Please try again later."
                    });
                }
            }

            return NextResponse.json({
                message: "Thank you! Your details have been saved successfully. Sinan MC Malappuram will contact you shortly."
            });
        }

        // Sanitizing output to prevent reasoning, chain-of-thought, planning, thoughts, or tool calls from being exposed to the user.
        let cleanedContent = message.content || "";

        // Remove <think>...</think> blocks and standalone tags
        cleanedContent = cleanedContent.replace(/<think>[\s\S]*?<\/think>/gi, "");
        cleanedContent = cleanedContent.replace(/<\/?think>/gi, "");

        // Remove <tool_call>...</tool_call> blocks and standalone tags
        cleanedContent = cleanedContent.replace(/<tool_call>[\s\S]*?<\/tool_call>/gi, "");
        cleanedContent = cleanedContent.replace(/<\/?tool_call>/gi, "");

        // Remove XML function tags <function=...>...</function>
        cleanedContent = cleanedContent.replace(/<function[\s\S]*?<\/function>/gi, "");
        cleanedContent = cleanedContent.replace(/<\/?function>/gi, "");
        cleanedContent = cleanedContent.replace(/<parameter[\s\S]*?<\/parameter>/gi, "");
        cleanedContent = cleanedContent.replace(/<\/?parameter>/gi, "");

        // Remove loose JSON-like structures in tags or standalone
        cleanedContent = cleanedContent.replace(/\{\s*"name"\s*:\s*"save_lead"[\s\S]*?\}/gi, "");
        cleanedContent = cleanedContent.replace(/\{\s*"arguments"[\s\S]*?\}/gi, "");

        // Remove chain-of-thought / planning prefix lines that should never appear in responses.
        // These patterns are stripped line-by-line: any leading lines that match are removed before the final answer.
        const reasoningLinePrefixes = [
            /^(the user( is|'s| asked| wants| said| has|:))/i,
            /^plan:/i,
            /^reasoning:/i,
            /^analysis:/i,
            /^thought:/i,
            /^thoughts:/i,
            /^wait,/i,
            /^let's think/i,
            /^i will/i,
            /^i'll/i,
            /^first,/i,
            /^step \d+:/i,
            /^final plan:/i,
            /^response structure:/i,
            /^internal note:/i,
            /^chain of thought:/i,
            /^here's my plan/i,
        ];

        // Strip all leading paragraphs/lines that match reasoning patterns
        const lines = cleanedContent.split("\n");
        let firstUserFacingLine = 0;
        for (let i = 0; i < lines.length; i++) {
            const trimmedLine = lines[i].trim();
            if (!trimmedLine) {
                // Skip blank lines at the start
                firstUserFacingLine = i + 1;
                continue;
            }
            const isReasoning = reasoningLinePrefixes.some((pattern) => pattern.test(trimmedLine));
            if (isReasoning) {
                firstUserFacingLine = i + 1;
            } else {
                break;
            }
        }
        cleanedContent = lines.slice(firstUserFacingLine).join("\n");

        // Trim whitespace after cleaning
        cleanedContent = cleanedContent.trim();

        // If the cleaned response is empty, return a fallback message
        if (!cleanedContent) {
            cleanedContent = "I'm sorry, something went wrong. Please try again.";
        }

        return NextResponse.json({
            message: {
                role: "assistant",
                content: cleanedContent
            }
        });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
