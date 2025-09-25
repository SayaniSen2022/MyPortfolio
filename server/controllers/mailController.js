// import nodemailer from "nodemailer";

// export const sendMail = async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `Portfolio Contact: ${name}`,
//       text: message,
//       html: `<p><b>Name:</b> ${name}</p>
//              <p><b>Email:</b> ${email}</p>
//              <p><b>Message:</b> ${message}</p>`,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


import { emailQueue } from "../queue/emailQueue.js";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Push job into Redis queue instead of sending directly
    await emailQueue.add("sendEmail", { name, email, message });

    res.status(200).json({
      success: true,
      message: "Message received! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Queue Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
