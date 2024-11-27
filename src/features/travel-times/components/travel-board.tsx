import React from "react";
import TravelForm from "./travel-form";
import TravelLayout from "./travel-layout";
import { PublicTransport, Walk } from "../types";
import { LatLngExpression } from "leaflet";

type Props = {
  from: string;
  to: string;
  tripData: PublicTransport[] | Walk[] | null;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  setTripData: React.Dispatch<
    React.SetStateAction<PublicTransport[] | Walk[] | null>
  >;
  setRouteCoordinatesCar: React.Dispatch<
    React.SetStateAction<LatLngExpression[] | null>
  >;
};

export default function TravelBoard({
  from,
  to,
  tripData,
  setFrom,
  setTo,
  setTripData,
  setRouteCoordinatesCar,
}: Props) {
  return (
    <>
      <TravelForm
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        setTripData={setTripData}
      />
      <TravelLayout
        tripData={tripData}
        setRouteCoordinatesCar={setRouteCoordinatesCar}
      />
    </>
  );
}
