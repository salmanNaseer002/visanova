import nodemailer from "nodemailer";

/** Singleton transporter — reused across requests in the same serverless instance */
let transporter: nodemailer.Transporter | null = null;

export function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.office365.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,       // port 587 uses STARTTLS, not SSL
    requireTLS: true,    // force STARTTLS — never fall back to plain
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  return transporter;
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  visaType: string;
  message: string;
}

/** Builds and sends the notification email to Visanova */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const transport = getTransporter();
  const to = process.env.CONTACT_RECIPIENT ?? "info@visanova.co.uk";
  const from = process.env.SMTP_USER ?? "info@visanova.co.uk";

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "short",
  });

  await transport.sendMail({
    from: `"Visanova Website" <${from}>`,
    to,
    replyTo: data.email,          // clicking Reply goes directly to the enquirer
    subject: `New Enquiry: ${data.visaType} — ${data.name}`,
    text: buildPlainText(data, submittedAt),
    html: buildHtml(data, submittedAt),
  });
}

// ─── Plain-text fallback ───────────────────────────────────────────────────────

function buildPlainText(d: ContactEmailData, submittedAt: string): string {
  return `
NEW ENQUIRY — VISANOVA WEBSITE
==============================

Name       : ${d.name}
Email      : ${d.email}
Phone      : ${d.phone || "Not provided"}
Visa Type  : ${d.visaType}
Submitted  : ${submittedAt}

MESSAGE
-------
${d.message}

==============================
This email was sent automatically from the Visanova website contact form.
Reply directly to this email to respond to the client.
`.trim();
}

// ─── HTML email ───────────────────────────────────────────────────────────────

function buildHtml(d: ContactEmailData, submittedAt: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const rows = [
    ["Full Name", escape(d.name)],
    ["Email Address", `<a href="mailto:${escape(d.email)}" style="color:#C9A027;">${escape(d.email)}</a>`],
    ["Phone Number", escape(d.phone || "Not provided")],
    ["Visa Type", `<strong>${escape(d.visaType)}</strong>`],
    ["Submitted At", escape(submittedAt)],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;background:#f5f7fa;font-size:13px;
                     font-weight:600;color:#0a1628;width:160px;
                     border-bottom:1px solid #e5e7eb;">${label}</td>
          <td style="padding:10px 14px;font-size:13px;color:#374151;
                     border-bottom:1px solid #e5e7eb;">${value}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;width:100%;background:#ffffff;
                    border-radius:16px;overflow:hidden;
                    box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1628 0%,#1e3a5f 100%);
                     padding:32px 36px;text-align:center;">
            <p style="margin:0 0 4px;font-size:22px;font-weight:700;color:#ffffff;
                      letter-spacing:-0.3px;">VISANOVA</p>
            <p style="margin:0;font-size:12px;color:#c9a027;
                      letter-spacing:3px;text-transform:uppercase;">New Website Enquiry</p>
          </td>
        </tr>

        <!-- Alert banner -->
        <tr>
          <td style="background:#c9a027;padding:12px 36px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#0a1628;">
              📩 A new client has submitted a contact form on visanova.co.uk
            </p>
          </td>
        </tr>

        <!-- Client details table -->
        <tr>
          <td style="padding:28px 36px 8px;">
            <p style="margin:0 0 14px;font-size:15px;font-weight:700;color:#0a1628;">
              Client Details
            </p>
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${tableRows}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:20px 36px 28px;">
            <p style="margin:0 0 10px;font-size:15px;font-weight:700;color:#0a1628;">
              Message
            </p>
            <div style="background:#f5f7fa;border-left:4px solid #c9a027;
                        border-radius:0 8px 8px 0;padding:16px 18px;">
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;
                        white-space:pre-wrap;">${escape(d.message)}</p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 36px 32px;text-align:center;">
            <a href="mailto:${escape(d.email)}?subject=Re: ${escape(d.visaType)} Enquiry"
               style="display:inline-block;padding:13px 30px;
                      background:linear-gradient(135deg,#c9a027,#e8c04a);
                      color:#0a1628;font-weight:700;font-size:14px;
                      border-radius:10px;text-decoration:none;">
              Reply to ${escape(d.name)}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5f7fa;padding:18px 36px;
                     border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              Visanova Ltd · 66 Birmingham Street, Oldbury B69 4DZ, UK<br>
              This email was generated automatically by the website contact form.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
