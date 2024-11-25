import { Trip } from "./types";

export function createRepository(db: Trip[]) {
  return {
    async getAll() {
      return db;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
