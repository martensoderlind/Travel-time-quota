"use server";
import { createFeature } from "./instance";
import { PublicTransport, Walk } from "./types";

export async function trip(origin: string, destination: string) {
  const fromStation = await getStations(origin);
  const destinationStation = await getStations(destination);
  const originIdId = fromStation.Departure[0].stopExtId;
  const destId = destinationStation.Departure[0].stopExtId;
  const trip = await createFeature.getTrip(originIdId, destId);
  return trip;
}
export async function tripByCoordinates(formData: FormData) {
  const origin = formData.get("from") as string;
  const destination = formData.get("to") as string;
  const trip = await createFeature.getCoordinates(origin, destination);
  return trip;
}

export async function getStations(station: string) {
  const stationId = await createFeature.getStationId(station);
  const { stopLocationOrCoordLocation } = stationId;
  const id = stopLocationOrCoordLocation[0].StopLocation.extId;
  const stationData = await createFeature.getStation(id);
  return stationData;
}

export async function adjustedTravelTime(
  tripData: PublicTransport[] | Walk[] | null
) {
  return await createFeature.calculateTravelTimeQuote(tripData);
}
