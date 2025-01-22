import { z } from "zod";
import { schema } from "../schema/validator";
type RequestBody = z.infer<typeof schema>;
export type { RequestBody };
