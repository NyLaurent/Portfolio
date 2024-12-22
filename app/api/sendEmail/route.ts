import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, location, subject, message } = await req.json();

  if (!email || !subject || !message || !location || !name) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use an App Password if 2FA is enabled
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "laulanyumbayire@gmail.com", // Send email to this address
    subject: `Portfolio Contact Form: ${subject}`,
    text: `From: ${email}\n\n${message}\n\nName: ${name}\nLocation: ${location}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' }, { status: 500 });
  }
}