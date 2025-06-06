import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { name, email, message } = await req.json(); // or req.body for pages directory

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use host/port/auth for custom SMTP
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER, // Your email
      subject: `${name} sent some message to you`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
