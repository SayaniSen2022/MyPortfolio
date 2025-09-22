import express from "express";
import { sendMail } from "../controllers/mailController.js";

const router = express.Router();

// router.post("/", sendMail);

router.post("/", (req,res)=>{
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to my site!</h1>
      </body>
    </html>
  `);
});

export default router;
