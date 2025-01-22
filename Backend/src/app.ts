import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import 'dotenv/config'

import user from "@/routes/user-route";
import { schema } from "@/lib/schema/validator";


const PORT = process.env.PORT || 5000;
const RATE_TIME_LIMIT = Number(process.env.RATE_TIME_LIMIT) || 15;
const RATE_REQUEST_LIMIT = Number(process.env.RATE_REQUEST_LIMIT) || 100;

const app = express();

app.use(express.json());


app.use(cors());

app.use(
  rateLimit({
    windowMs: RATE_TIME_LIMIT * 60 * 1000,
    max: RATE_REQUEST_LIMIT,
  }),
);





app.use("", user);

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
