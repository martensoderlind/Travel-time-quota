import { MapPin, Car, Bus } from "lucide-react";
import { Trip } from "../types";

type Props = {
  trip: Trip;
};

export default function TravelCard({ trip }: Props) {
  function calculateTimeRatio(transit: number, car: number) {
    return Number((transit / car).toFixed(2));
  }
  return (
    <div key={trip.id} className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        <MapPin className="text-blue-500" />
        <span className="font-medium">
          {trip.from.name} → {trip.to.name}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Bus className="text-green-500" />
          <span>{trip.publicTransitTime} min</span>
        </div>

        <div className="flex items-center space-x-2">
          <Car className="text-gray-500" />
          <span>{trip.carTime} min</span>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t">
        <div className="flex justify-between items-center">
          <span className="font-medium">Restidskvot:</span>
          <span
            className={`text-lg ${
              calculateTimeRatio(trip.publicTransitTime, trip.carTime) > 1.5
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {calculateTimeRatio(trip.publicTransitTime, trip.carTime)}
          </span>
        </div>
      </div>
    </div>
  );
}
