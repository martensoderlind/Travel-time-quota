import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

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
