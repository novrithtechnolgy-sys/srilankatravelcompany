import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      country,
      travelDate,
      travelers,
      tour,
      date,
      message,
    } = body;

    // VALIDATION
    if (
      !name ||
      !email ||
      !tour ||
      !date
    ) {
      return NextResponse.json(
        {
          success: false,
          message:"Missing required fields",
        },
        { status: 400 }
      );
    }

    // TRANSPORTER
    const transporter =
      nodemailer.createTransport({
      service: "gmail",

        auth: {
          user:
            "novrithtechnolgy@gmail.com",

          pass:
            "anll hmzr wiju ptyf",
        },
      });

    // EMAIL TEMPLATE
  const mailOptions = {
  from: `"${name}" <${email}>`,

  to: process.env.EMAIL_TO,

  subject: `🌍 New Tour Inquiry from ${name}`,

  html: `
  <div style="margin:0;padding:40px;background:#f5f7fa;font-family:Arial,sans-serif;">

    <div style="max-width:720px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,.08);">

      <!-- Header -->
      <div style="background:#08295D;padding:40px;text-align:center;">

        <img
          src="https://res.cloudinary.com/dvgodnxlg/image/upload/v1781686885/Flybeyonz_Color_Logo_uob6pl.png"
          alt="Flybeyonz"
          style="width:220px;max-width:100%;margin-bottom:20px;"
        />

        <h1 style="margin:0;color:#D8A31A;font-size:32px;font-weight:bold;">
          New Tour Inquiry
        </h1>

        <p style="margin-top:12px;color:#ffffff;font-size:16px;">
          Flybeyonz Travels & Tours Website
        </p>

      </div>

      <!-- Body -->
      <div style="padding:40px;">

        <h2 style="margin-top:0;color:#08295D;">
          Traveler Information
        </h2>

        <table
          width="100%"
          cellpadding="12"
          cellspacing="0"
          style="border-collapse:collapse;font-size:15px;"
        >

          <tr>
            <td style="width:220px;font-weight:bold;background:#fafafa;">
              Full Name
            </td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Email
            </td>
            <td>
              <a
                href="mailto:${email}"
                style="color:#D8A31A;text-decoration:none;"
              >
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Phone
            </td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Country
            </td>
            <td>${country}</td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Preferred Travel Date
            </td>
            <td>${travelDate || "-"}</td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Travelers
            </td>
            <td>${travelers}</td>
          </tr>

          <tr>
            <td style="font-weight:bold;background:#fafafa;">
              Tour Interest
            </td>
            <td>${tour}</td>
          </tr>

        </table>

        <!-- Message -->

        <h2 style="margin-top:45px;color:#08295D;">
          Travel Requirements
        </h2>

        <div
          style="
            background:#fafafa;
            border-left:6px solid #D8A31A;
            padding:22px;
            color:#555;
            line-height:1.8;
            border-radius:8px;
          "
        >
          ${
            message
              ? message.replace(/\n/g, "<br>")
              : "No additional message provided."
          }
        </div>

      </div>

      <!-- Footer -->

      <div
        style="
          background:#08295D;
          color:white;
          text-align:center;
          padding:30px;
        "
      >

        <h3
          style="
            color:#D8A31A;
            margin-top:0;
            margin-bottom:10px;
          "
        >
          Flybeyonz Travels & Tours
        </h3>

        <p style="margin:5px 0;">
          Thank you for choosing Flybeyonz.
        </p>

        <p style="margin:5px 0;">
          This inquiry was submitted through the official website.
        </p>

        <div style="margin-top:18px;">

          <a
            href="https://flybeyonz.com"
            style="
              color:#ffffff;
              text-decoration:none;
              margin:0 10px;
            "
          >
            Website
          </a>

          |

          <a
            href="mailto:flybeyonztravelsandtours@gmail.com"
            style="
              color:#ffffff;
              text-decoration:none;
              margin:0 10px;
            "
          >
            Email
          </a>

          |

          <a
            href="https://wa.me/94771234567"
            style="
              color:#ffffff;
              text-decoration:none;
              margin:0 10px;
            "
          >
            WhatsApp
          </a>

        </div>

        <p
          style="
            margin-top:20px;
            font-size:13px;
            opacity:.8;
          "
        >
          © ${new Date().getFullYear()} Flybeyonz Travels & Tours.
          All Rights Reserved.
        </p>

      </div>

    </div>

  </div>
  `,
};

    // SEND EMAIL
    await transporter.sendMail(
      mailOptions
    );

    return NextResponse.json({
      success: true,
      message:
        "Inquiry sent successfully",
    });
  } catch (error) {
    console.error(
      "EMAIL ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send inquiry",
      },
      { status: 500 }
    );
  }
}