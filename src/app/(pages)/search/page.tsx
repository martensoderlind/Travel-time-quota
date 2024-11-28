"use client";
// import TravelMap from "@/features/travel-times/components/travel-map";
import dynamic from "next/dynamic";
const TravelMap = dynamic(
  () => import("@/features/travel-times/components/travel-map"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full">
        <p>Map is loading...</p>
      </div>
    ),
  }
);
import { useState } from "react";
import { PublicTransport, Walk } from "@/features/travel-times/types";
import TravelBoard from "@/features/travel-times/components/travel-board";
import { LatLngExpression } from "leaflet";

export default function Page() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripData, setTripData] = useState<PublicTransport[] | Walk[] | null>(
    null
  );
  const [routeCoordinatesCar, setRouteCoordinatesCar] = useState<
    LatLngExpression[] | null
  >(null);

  return (
    <div className="container mx-auto w-8/12">
      <div className="mx-auto mt-4 rounded-md">
        <TravelMap
          setFrom={setFrom}
          setTo={setTo}
          from={from}
          routeCoordinatesCar={routeCoordinatesCar}
        />
      </div>
      <TravelBoard
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        setTripData={setTripData}
        tripData={tripData}
        setRouteCoordinatesCar={setRouteCoordinatesCar}
      />
    </div>
  );
}
