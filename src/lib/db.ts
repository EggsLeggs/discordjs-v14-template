import { PrismaClient } from "@prisma/client";

import { env } from "../env";

export class dbClient {
  public db: PrismaClient;

  constructor() {
    const globalForPrisma = globalThis as unknown as {
      prisma: PrismaClient | undefined;
    };

    this.db =
      globalForPrisma.prisma ??
      new PrismaClient({
        log:
          env.NODE_ENV === "development"
            ? ["query", "error", "warn"]
            : ["error"],
      });
  }
}
