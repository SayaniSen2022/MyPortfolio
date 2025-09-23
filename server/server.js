import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; 
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/contact", mailRoutes);

// Default homepage
// app.get("/", (req, res) => {
//   const PORT = process.env.PORT || 5000; // make PORT available inside HTML
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Server Status</title>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             background: #f5f5f5;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }
//           .status {
//             padding: 20px 40px;
//             border-radius: 10px;
//             background: white;
//             box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//             text-align: center;
//           }
//           h1 { color: green; }
//         </style>
//       </head>
//       <body>
//         <div class="status">
//           <h1>✅ Server is running!</h1>
//           <p>Your Express server is live on port ${PORT} 🚀</p>
//         </div>
//       </body>
//     </html>
//   `);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log( `Server running on PORT ${PORT}`));