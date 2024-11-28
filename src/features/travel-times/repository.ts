import { Db } from "./db";
import { carTable, publictransportTable } from "./db";
import { CarData, PublicTransport, Walk } from "./types";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db;
    },
    async addCarData(carData: CarData) {
      await db.insert(carTable).values({
        timestamp: new Date(),
        duration: parseInt((carData.routes[0].duration / 60).toFixed(0)),
        from: carData.waypoints[0].name,
        to: carData.waypoints[1].name,
        geometry: carData.routes[0].geometry,
      });
      console.log("car object added to db");
    },
    async addPublicTransportData(tripData: PublicTransport[] | Walk[]) {
      await db.insert(publictransportTable).values({
        timestamp: new Date(),
        data: tripData,
      });
      console.log("public transport data added to db");
    },
    async getTripData() {
      return await db.select().from(publictransportTable);
    },
    async getCarTripData() {
      return await db.select().from(carTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
