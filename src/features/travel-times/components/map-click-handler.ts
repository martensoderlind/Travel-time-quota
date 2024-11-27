import { LatLngExpression } from "leaflet";
import { useMapEvents } from "react-leaflet";

type Props = {
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  from: string;
  routeCoordinatesCar: LatLngExpression[] | null;
};
export function MapClickHandler({
  setFrom,
  setTo,
  from,
}: {
  setFrom: Props["setFrom"];
  setTo: Props["setTo"];
  from: Props["from"];
}) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      if (from === "") {
        setFrom(`${lat.toFixed(4)} ${lng.toFixed(4)}`);
      } else {
        setTo(`${lat.toFixed(4)} ${lng.toFixed(4)}`);
      }
    },
  });

  return null;
}
