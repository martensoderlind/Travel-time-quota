import polyline from "@mapbox/polyline";
import { OSRMResponse } from "./types";

export function CapitalFirstLetter(name: string) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
export function calculateDeltaTime(
  originTime: string,
  destinationTime: string
) {
  const [hours1, minutes1, seconds1] = originTime.split(":").map(Number);
  const [hours2, minutes2, seconds2] = destinationTime.split(":").map(Number);

  const date1 = new Date(0, 0, 0, hours1, minutes1, seconds1);
  const date2 = new Date(0, 0, 0, hours2, minutes2, seconds2);

  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

  // Konvertera till sekunder om så önskas
  return diffInMilliseconds / 1000;
}

export function weightedTime(tripTime: number, type: string) {
  if (type === "WALK") {
    return (tripTime * 2) / 60;
  }
  return tripTime / 60;
}

export function polyLineRoute(osrmResponse: OSRMResponse) {
  const decodePolyline = (encodedGeometry: string): [number, number][] => {
    try {
      return polyline.decode(encodedGeometry);
    } catch (error) {
      console.error("Problem while decoding polyline:", error);
      return [];
    }
  };

  const routeCoordinates: [number, number][] =
    osrmResponse.routes &&
    osrmResponse.routes[0] &&
    osrmResponse.routes[0].geometry
      ? decodePolyline(osrmResponse.routes![0].geometry)
      : [];

  return routeCoordinates;
}
export function polyLineRoutePublic(osrmResponse: string) {
  const decodePolyline = (encodedGeometry: string): [number, number][] => {
    try {
      return polyline.decode(encodedGeometry);
    } catch (error) {
      console.error("Problem while decoding polyline:", error);
      return [];
    }
  };

  const routeCoordinates: [number, number][] =
    osrmResponse !== null ? decodePolyline(osrmResponse) : [];

  return routeCoordinates;
}
