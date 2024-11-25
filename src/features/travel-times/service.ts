import { createRepository } from "./repository";
import { Trip } from "./types";

export function createTripService(db: Trip[]) {
  const repository = createRepository(db);
  //   const api_key = process.env.API_KEY;
  return {
    async getAllTrips() {
      return await repository.getAll();
    },
  };
}
