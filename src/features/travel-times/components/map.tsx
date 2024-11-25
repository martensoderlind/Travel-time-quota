"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export function LocationMarker() {
  const [lati, setLati] = useState(59.3293);
  const [long, setLong] = useState(18.0686);
  const map = useMapEvents({
    click() {
      map.locate();
    },

    locationfound(e) {
      setLati(e.latlng.lat);
      setLong(e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <Marker position={{ lat: lati, lng: long }}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function TravelMap() {
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
      {/* <Marker position={position}></Marker> */}
      <LocationMarker />
    </MapContainer>
  );
}
