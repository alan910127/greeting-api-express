import { badRequest } from "@hapi/boom";
import type { Request } from "express";
import { AnyZodObject, z, ZodError } from "zod";

export const zParse = async <T extends AnyZodObject>(
  schema: T,
  req: Request
): Promise<z.infer<T>> => {
  try {
    return await schema.parseAsync(req);
  } catch (error) {
    if (error instanceof ZodError) {
      throw badRequest(error.message);
    }
    return badRequest(JSON.stringify(error));
  }
};
