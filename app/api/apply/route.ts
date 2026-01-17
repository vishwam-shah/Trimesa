import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, experience, resumeLink, jobTitle } = body;

        // In a real scenario, you would use real credentials from process.env
        // For this task, I'll set up a transporter. 
        // If SMTP credentials aren't provided, it will log the request and return success.

        const smtpPort = parseInt(process.env.SMTP_PORT || "587");
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465, // true for port 465, false for others
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            logger: true,
            debug: true,
        });

        const mailOptions = {
            from: `"Trimesha Careers" <${process.env.SMTP_USER || "careers@trimesha.com"}>`,
            to: "admin@trimesha.com",
            subject: `New Job Application: ${jobTitle} - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #6d28d9; text-align: center;">New Job Application</h2>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Job Title:</strong> ${jobTitle}</p>
                    <p><strong>Full Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Experience/Bio:</strong><br/>${experience || "N/A"}</p>
                    <p><strong>Resume Link:</strong> <a href="${resumeLink}" style="color: #6d28d9;">View Resume</a></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #666; text-align: center;">This application was submitted via Trimesha Careers Portal.</p>
                </div>
            `,
        };

        // Check if SMTP is configured
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn("⚠️ SMTP NOT CONFIGURED: Application received but email not sent.");
            console.log("Details:", { name, email, jobTitle });
            return NextResponse.json({
                message: "Application received! (Note: Email sending is not yet configured on the server. Please check your .env.local file.)",
                mock: true
            }, { status: 200 });
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
