import { schema } from "../schema/validator";
import { z } from "zod";

type RequestBody = z.infer<typeof schema>;
export type { RequestBody };
