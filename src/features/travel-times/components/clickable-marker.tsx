import { Marker, useMapEvents } from "react-leaflet";
import { useRef, useState } from "react";

const positionMarker = {
  lat: 1.0,
  lng: 1.0,
};

export function ClickableMarker() {
  const [position, setPosition] = useState(positionMarker);
  const markerRef = useRef(null);

  function MapClickHandler() {
    useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
      },
    });
    return <Marker position={{ lat: position.lat, lng: position.lng }} />;
  }
  return (
    <Marker position={position} ref={markerRef}>
      <MapClickHandler />
    </Marker>
  );
}
