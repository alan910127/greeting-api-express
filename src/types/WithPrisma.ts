import { PrismaClient } from "@prisma/client";

export type WithPrisma<T> = {
  prisma: PrismaClient;
} & T;
