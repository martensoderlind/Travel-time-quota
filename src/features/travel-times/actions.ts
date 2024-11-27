"use server";
import { createFeature } from "./instance";
import { CarData, OSRMResponse, PublicTransport, Walk } from "./types";
import polyline from "@mapbox/polyline";

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

export async function polyLineRoute(osrmResponse: OSRMResponse) {
  console.log("route string", osrmResponse);
  const decodePolyline = (encodedGeometry: string): [number, number][] => {
    try {
      return polyline.decode(encodedGeometry);
    } catch (error) {
      console.error("Fel vid avkodning av polyline:", error);
      return [];
    }
  };

  const routeCoordinates: [number, number][] =
    osrmResponse.routes &&
    osrmResponse.routes[0] &&
    osrmResponse.routes[0].geometry
      ? decodePolyline(osrmResponse.routes[0].geometry)
      : [];

  // console.log(routeCoordinates);
  return routeCoordinates;
}
export async function saveTravelData(
  tripData: PublicTransport[] | Walk[],
  carData: CarData
) {
  await createFeature.saveTravelData(tripData!, carData);
}
export async function getTripData() {
  return await createFeature.getTripData();
}
export async function getCarTripData() {
  return await createFeature.getCarTripData();
}
