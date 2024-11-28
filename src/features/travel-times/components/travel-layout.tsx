import TravelCard from "./travel-card";
import { PublicTransport, Walk } from "../types";
import { LatLngExpression } from "leaflet";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  setRouteCoordinatesCar: React.Dispatch<
    React.SetStateAction<LatLngExpression[] | null>
  >;
};

export default function TravelLayout({
  tripData,
  setRouteCoordinatesCar,
}: Props) {
  return (
    <div className="container mx-auto rounded-md space-y-4 mb-4 shadow-md bg-white">
      {tripData !== null ? (
        <TravelCard
          tripData={tripData}
          setRouteCoordinatesCar={setRouteCoordinatesCar}
        />
      ) : undefined}
    </div>
  );
}
