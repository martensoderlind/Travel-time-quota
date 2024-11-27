import dynamic from "next/dynamic";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { ClickableMarker } from "./clickable-marker";
import { MapClickHandler } from "./map-click-handler";
import { useEffect } from "react";

type Props = {
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  from: string;
  routeCoordinatesCar: LatLngExpression[] | null;
};

export default function TravelMap({
  setFrom,
  setTo,
  from,
  routeCoordinatesCar,
}: Props) {
  return (
    <MapContainer
      center={{ lat: 59.3293, lng: 18.0686 }}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      {routeCoordinatesCar !== null && (
        <Polyline
          positions={routeCoordinatesCar}
          color="blue"
          weight={5}
          opacity={0.7}
        />
      )}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ClickableMarker />
      <MapClickHandler setFrom={setFrom} setTo={setTo} from={from} />
    </MapContainer>
  );
}
