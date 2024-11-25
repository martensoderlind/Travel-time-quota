import { CapitalFirstLetter } from "./logic";
import { createRepository } from "./repository";
import { Coordinates, Trip } from "./types";

export function createTripService(db: Trip[]) {
  const repository = createRepository(db);
  const api_key = process.env.API_KEY;
  return {
    async getAllTrips() {
      return await repository.getAll();
    },
    async getStationId(name: string) {
      const formatedName = CapitalFirstLetter(name);
      try {
        const url = `https://api.resrobot.se/v2.1/location.name?input=${formatedName}&format=json&accessId=${api_key}`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    async getStation(id: string) {
      try {
        const url = `https://api.resrobot.se/v2.1/departureBoard?id=${id}&format=json&accessId=${api_key}&Stop.lon=18.07355&stop.lat=59.314342`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    async getTrip(fromStation: string, toStation: string) {
      try {
        const url = `https://api.resrobot.se/v2.1/trip?originId=${fromStation}&destId=${toStation}&passlist=true&showPassingPoints=true&format=json&numTrips=5&accessId=${api_key}`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    async getTripByCoordinates(
      fromStation: Coordinates,
      toStation: Coordinates
    ) {
      const originLat = fromStation.lat;
      const originLng = fromStation.lng;
      const destLat = toStation.lat;
      const destLng = toStation.lng;

      const url = `https://api.resrobot.se/v2.1/trip?originCoordLat=${originLat}&originCoordLong=${originLng}&destCoordLat=${destLat}&destCoordLong=${destLng}&format=json&accessId=${api_key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.Trip[0].LegList.Leg[0];
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          throw new Error(`Trip fetch failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred");
      }
    },
  };
}
