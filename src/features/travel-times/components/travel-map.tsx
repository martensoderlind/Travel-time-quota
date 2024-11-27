import { MapContainer, Polyline, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import { ClickableMarker } from "./clickable-marker";
// import { polyLineRoute } from "../actions";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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
  function MapClickHandler() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (from === "") {
          setFrom(`${lat.toFixed(4).toString()} ${lng.toFixed(4).toString()}`);
        } else {
          setTo(`${lat.toFixed(4).toString()} ${lng.toFixed(4).toString()}`);
        }
      },
    });
    return <></>;
  }

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
      <MapClickHandler />
    </MapContainer>
  );
}
