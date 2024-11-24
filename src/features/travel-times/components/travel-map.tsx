"use client";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Props = {
  setForm: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  from: string;
};

export default function TravelMap({ setForm, setTo, from }: Props) {
  function MapClickHandler() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (from === "") {
          setForm(`${lat.toFixed(4).toString()} ${lng.toFixed(4).toString()}`);
        } else {
          setTo(`${lat.toFixed(4).toString()} ${lng.toFixed(4).toString()}`);
        }
        console.log(`Latitud: ${lat}, Longitud: ${lng}`);
      },
    });
    return null;
  }
  return (
    <MapContainer
      center={{ lat: 59.3293, lng: 18.0686 }}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <MapClickHandler />
    </MapContainer>
  );
}
