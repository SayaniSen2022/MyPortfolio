import { Worker } from "bullmq";
import redis from "./redisClient.js";
import nodemailer from "nodemailer";


const worker = new Worker(
  "emailQueue",
  async job => {
    const { name, email, message } = job.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: message,
    });

    console.log(`Recipient: ${process.env.EMAIL_USER}; From: ${email}(${name}); Message: ${message}`);
  },
  { connection: redis }
);
