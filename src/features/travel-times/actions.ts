"use server";
import { createFeature } from "./instance";
import { CarData, OSRMResponse, PublicTransport, Walk } from "./types";

export async function tripByCoordinates(formData: FormData) {
  const origin = formData.get("from") as string;
  const destination = formData.get("to") as string;
  const trip = await createFeature.getCoordinates(origin, destination);
  return trip;
}

export async function adjustedTravelTime(
  tripData: PublicTransport[] | Walk[] | null
) {
  return await createFeature.calculateTravelTimeQuote(tripData);
}

export async function polyLineRoute(osrmResponse: OSRMResponse) {
  return createFeature.getPolyLineRoute(osrmResponse);
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
