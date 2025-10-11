import { emailQueue } from "../queue/emailQueue.js";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Push job into Redis queue instead of sending directly
    await emailQueue.add("sendEmail", { name, email, message }, {delay: 15000});

    res.status(200).json({
      success: true,
      message: "Message received! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Queue Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
