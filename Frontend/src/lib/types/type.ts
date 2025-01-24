import { z } from "zod";
import { schema } from "@/lib/schema/validator";
type RequestBody = z.infer<typeof schema>;
export type { RequestBody };
