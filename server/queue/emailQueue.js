import { Queue } from "bullmq";
import redis from "./redisClient.js";


export const emailQueue = new Queue("emailQueue", { connection: redis });

