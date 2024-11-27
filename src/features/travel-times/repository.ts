import { Db } from "./";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
