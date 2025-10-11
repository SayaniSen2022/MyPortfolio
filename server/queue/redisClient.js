import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

console.log(`Redis URL: ${process.env.REDIS_URL}`);

const redis = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("Connected to Upstash Redis");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

export default redis;
