import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name, 
      email,
      date,
      travelers,
      pickup,
      message,
      experienceSlug,
    } = body;

    // =========================
    // SEND EMAIL
    // =========================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "sumalnadira123@gmail.com",
      subject: "New Booking Received",
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Experience:</strong> ${experienceSlug}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Travelers:</strong> ${travelers}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // =========================
    // GOOGLE SHEETS
    // =========================

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            date,
            travelers,
            pickup,
            message,
            experienceSlug,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}