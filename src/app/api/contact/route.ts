import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
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

      to: "sumalnadira123@gmail.com",

      subject: `🌴 New Tour Inquiry from ${name}`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px;">
        
        <div style="max-width:700px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <div style="background:#1D4063; padding:30px; text-align:center; color:white;">
            
            <img
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1779808700/SLTC_Logo-052_mxmf5c.png"
              alt="Sri Lanka Travel Company"
              style="width:180px; margin-bottom:15px; border-radius:10px;"
            />

            <h1 style="margin:0; font-size:28px;">
              New Tour Inquiry
            </h1>

            <p style="margin-top:10px; opacity:0.9;">
              Sri Lanka Travel Company Website
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:35px;">

            <h2 style="margin-top:0; color:#1D4063;">
              Traveler Details
            </h2>

            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

              <tr>
                <td style="font-weight:bold; width:180px;">
                  Full Name:
                </td>

                <td>${name}</td>
              </tr>

              <tr>
                <td style="font-weight:bold;">
                  Email Address:
                </td>

                <td>
                  <a href="mailto:${email}" style="color:#C86421;">
                    ${email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold;">
                  Tour Interest:
                </td>

                <td>${tour}</td>
              </tr>

              <tr>
                <td style="font-weight:bold;">
                  Travel Date:
                </td>

                <td>${date}</td>
              </tr>

            </table>

            <!-- MESSAGE -->
            <h2 style="margin-top:40px; color:#1D4063;">
              Traveler Message
            </h2>

            <div style="background:#f8f8f8; border-left:5px solid #C86421; padding:20px; line-height:1.8; color:#444; border-radius:8px;">
              ${
                message
                  ? message.replace(
                      /\n/g,
                      "<br>"
                    )
                  : "No message provided."
              }
            </div>

          </div>

          <!-- FOOTER -->
          <div style="background:#1D4063; padding:25px; text-align:center; color:white; font-size:13px;">

            <p style="margin:0;">
              This inquiry was submitted through the Sri Lanka Travel Company website.
            </p>

            <p style="margin-top:8px;">
              © ${new Date().getFullYear()} Sri Lanka Travel Company
            </p>

            <div style="margin-top:15px;">
              
              <a
                href="https://www.srilankatravelcompany.com"
                style="color:#ffffff; text-decoration:none; margin:0 8px;"
              >
                Website
              </a>

              |

              <a
                href="mailto:hello@srilankatourcompany.com"
                style="color:#ffffff; text-decoration:none; margin:0 8px;"
              >
                Email
              </a>

              |

              <a
                href="https://wa.me/+94771234567"
                style="color:#ffffff; text-decoration:none; margin:0 8px;"
              >
                WhatsApp
              </a>

            </div>

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