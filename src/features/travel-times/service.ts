import { createFeature } from "./instance";
import { calculateDeltaTime, CapitalFirstLetter, weightedTime } from "./logic";
import { createRepository } from "./repository";
import { Coordinates, PublicTransport, Trip, Walk } from "./types";

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
    async getCoordinates(origin: string, destination: string) {
      const [originLat, originLng] = origin.split(" ");
      const [destinationLat, destinationLng] = destination.split(" ");

      return await createFeature.getTripByCoordinates(
        { lat: originLat, lng: originLng },
        { lat: destinationLat, lng: destinationLng }
      );
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
        return data.Trip[0].LegList.Leg;
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          throw new Error(`Trip fetch failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred");
      }
    },
    async calculateTravelTimeQuote(
      tripData: PublicTransport[] | Walk[] | null
    ) {
      let travelTime = 0;
      for (let i = 0; i < tripData!.length; i++) {
        const tripTime = calculateDeltaTime(
          tripData![i].Origin.time,
          tripData![i].Destination.time
        );
        const adjustedTime = weightedTime(tripTime, tripData![i].type);
        console.log("times:", tripTime, adjustedTime);
        travelTime = travelTime + adjustedTime;
      }
      const travelData = {
        from: tripData![0].Destination.name,
        to: tripData![tripData!.length - 1].Origin.name,
        publicTransitTime: travelTime,
        carTime: 10,
      };
      return travelData;
    },
  };
}
