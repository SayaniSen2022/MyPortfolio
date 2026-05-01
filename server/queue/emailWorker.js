// server/queue/emailWorker.js
import { Worker } from "bullmq";
import redis from "./redisClient.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const worker = new Worker(
  "emailQueue",
  async (job) => {
    console.log("📨 Processing job:", job.data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: job.data.email,
      subject: `Portfolio Contact: ${job.data.name}`,
      text: job.data.message,
      html: `<p><b>Name:</b> ${job.data.name}</p>
             <p><b>Email:</b> ${job.data.email}</p>
             <p><b>Message:</b> ${job.data.message}</p>`,
    });

    console.log("✅ Email sent successfully!");
  },
  { connection: redis }
);

worker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed:`, err);
});
