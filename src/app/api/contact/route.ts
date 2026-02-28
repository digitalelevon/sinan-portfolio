export const runtime = "edge";

import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, phone, service } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Save to Firebase
        await addDoc(collection(db, "contacts"), {
            name,
            email,
            phone: phone || "Not provided",
            service: service || "Not provided",
            message,
            status: "new",
            source: "contact_form",
            createdAt: serverTimestamp()
        });

        console.log("Contact Form Submission:", { name, email, message });

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
