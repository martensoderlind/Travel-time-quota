import { Db } from "./db/";
import { createFeature } from "./instance";
import { calculateDeltaTime, polyLineRoute, weightedTime } from "./logic";
import { createRepository } from "./repository";
import {
  CarData,
  Coordinates,
  OSRMResponse,
  PublicTransport,
  Walk,
} from "./types";

export function createTripService(db: Db) {
  const repository = createRepository(db);
  const api_key = process.env.API_KEY;
  return {
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
        console.log("kollektivtrafik:", data.Trip[0].LegList);
        return data.Trip[0].LegList.Leg;
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          throw new Error(`Trip fetch failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred");
      }
    },

    async traveltimeCar(fromStation: Coordinates, toStation: Coordinates) {
      const originLat = fromStation.lat;
      const originLng = fromStation.lng;
      const destLat = toStation.lat;
      const destLng = toStation.lng;

      const url = `https://router.project-osrm.org/route/v1/driving/${originLng},${originLat};${destLng},${destLat}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          throw new Error(`Trip fetch failed: ${error.message}`);
        }
        throw new Error("An unknown error occurred");
      }
    },

    publicTransportTravelTime(tripData: PublicTransport[] | Walk[] | null) {
      let travelTime = 0;

      for (let i = 0; i < tripData!.length; i++) {
        const tripTime = calculateDeltaTime(
          tripData![i].Origin.time,
          tripData![i].Destination.time
        );
        if (tripData![i].type !== "WALK") {
          const adjustedWaitTime =
            parseInt(
              tripData![i].minimumChangeDuration!.replaceAll(/[PTM]/g, "")
            ) * 1.25;
          travelTime = travelTime + adjustedWaitTime;
        }
        const adjustedTime = weightedTime(tripTime, tripData![i].type);
        travelTime = travelTime + adjustedTime;
      }
      return travelTime;
    },

    async calculateTravelTime(tripData: PublicTransport[] | Walk[] | null) {
      const origincoord = {
        lat: tripData![0].Origin.lat.toString(),
        lng: tripData![0].Origin.lon.toString(),
      };
      const destcoord = {
        lat: tripData![tripData!.length - 1].Destination.lat.toString(),
        lng: tripData![tripData!.length - 1].Destination.lon.toString(),
      };

      const travelTime = createFeature.publicTransportTravelTime(tripData);
      const carData = await createFeature.traveltimeCar(origincoord, destcoord);

      const travelData = {
        originTime: tripData![0].Origin.time,
        destTime: tripData![tripData!.length - 1].Destination.time,
        from: tripData![0].Destination.name
          .replace(/\s*\(Stockholm kn\)/g, "")
          .trim(),
        to: tripData![tripData!.length - 1].Origin.name
          .replace(/\s*\(Stockholm kn\)/g, "")
          .trim(),
        publicTransitTime: travelTime,
        carData: carData,
      };

      return travelData;
    },
    async saveTravelData(
      tripData: PublicTransport[] | Walk[],
      carData: CarData
    ) {
      await repository.addCarData(carData);
      await repository.addPublicTransportData(tripData);
    },
    async getTripData() {
      return repository.getTripData();
    },
    async getCarTripData() {
      return repository.getCarTripData();
    },
    getPolyLineRoute(osrmResponse: OSRMResponse) {
      return polyLineRoute(osrmResponse);
    },
  };
}
