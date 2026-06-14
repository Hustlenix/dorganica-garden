import { NextResponse } from "next/server";
import { contactFormSchema } from "@shared/schemas/contact";
import { getDb } from "@lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate using the shared Zod schema (same one used on the frontend)
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      return NextResponse.json(
        { success: false, message: "Validation failed. Please check your inputs.", errors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = result.data;

    // Store in database
    const db = getDb();
    const stmt = db.prepare(
      "INSERT INTO contacts (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)"
    );
    stmt.run(name, email, phone, service, message);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! We have received your enquiry and will get back to you within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
