import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set.");
}

const adapter = new PrismaPg(
  new Pool({
    connectionString: databaseUrl,
  })
);

export const client =
  globalThis.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;