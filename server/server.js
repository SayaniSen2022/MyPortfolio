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


console.log("REDIS_URL:", process.env.REDIS_URL);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log( `Server running on PORT ${PORT}`));