export const runtime = "edge";

import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
You are digi bot, the professional AI assistant of sinan mc Malappuram, Freelance Web Developer and SEO Specialist.

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

You MUST ONLY call the function \`save_lead\` with the collected details (name, phone, email, and the service they mentioned). DO NOT output any text response, just trigger the function call. The system will handle sending the thank you message.

IMPORTANT RULES:

DO NOT skip steps
DO NOT reject answers
DO NOT ask unrelated questions
DO NOT start normal conversation before collecting details
ALWAYS follow lead capture flow first

After lead capture is complete, you may answer general questions.

Always be professional and friendly.

`;

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const messages: { role: string; content: string }[] = body.messages || [];

        // Check if the success message was already sent to avoid duplicate saves in the same session
        const alreadySaved = messages.some(
            (msg) => msg.role === "assistant" && msg.content && msg.content.includes("Thank you. sinan mc Malappuram will contact you soon.")
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const completionParams: any = {
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: systemPrompt },
                ...messages,
            ],
        };

        if (!alreadySaved) {
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
                                phone: { type: "string", description: "The user's phone number" },
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

        const response = await groq.chat.completions.create(completionParams);

        const choice = response.choices[0];
        const message = choice.message;

        if (message.tool_calls && message.tool_calls.length > 0) {
            const toolCall = message.tool_calls[0];
            if (toolCall.function.name === "save_lead") {
                const leadData = JSON.parse(toolCall.function.arguments || "{}");

                await addDoc(collection(db, "chat_leads"), {
                    name: leadData.name || "Unknown",
                    phone: leadData.phone || "Unknown",
                    email: leadData.email || "Unknown",
                    service: leadData.service || "Unknown",
                    status: "new",
                    source: "chatbot_ai",
                    createdAt: serverTimestamp()
                });

                return NextResponse.json({
                    message: {
                        role: "assistant",
                        content: "Thank you. sinan mc Malappuram will contact you soon.\n\nHere is how sinan mc Malappuram can help you:\n\nWeb Development:\nCustom business websites designed to generate leads.\n\nSEO:\nRank your website on Google and increase traffic.\n\nDigital Marketing:\nRun ads and marketing campaigns to generate customers."
                    }
                });
            }
        }

        return NextResponse.json({
            message: {
                role: "assistant",
                content: message.content
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
