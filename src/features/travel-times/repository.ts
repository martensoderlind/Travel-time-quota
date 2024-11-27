import { Db } from "./";
import { CarData, PublicTransport, Walk } from "./types";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db;
    },
    async addCarData(carData: CarData) {
      console.log(carData);
    },
    async addPublicTransportData(tripData: PublicTransport[] | Walk[]) {
      console.log(tripData);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
