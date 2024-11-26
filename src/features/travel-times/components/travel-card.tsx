import { MapPin, Car, Bus } from "lucide-react";
import { PublicTransport, Walk } from "../types";
import { adjustedTravelTime } from "../actions";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
};

export default async function TravelCard({ tripData }: Props) {
  const trip = await adjustedTravelTime(tripData);
  console.log("trip:", trip);
  function calculateTimeRatio(transit: number, car: number) {
    return Number((transit / car).toFixed(2));
  }

  function publicTransportMarketShare(transit: number, car: number) {
    const travelTimeQuota = calculateTimeRatio(transit, car);
    const marketShare = 0.9116 * Math.pow(travelTimeQuota, -1.264) * 100;
    return marketShare.toFixed(0);
  }

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        <MapPin className="text-blue-500" />
        <span className="font-medium">
          {trip.from} → {trip.to}
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
          <span className="font-medium">Travel Time Quota:</span>
          <span
            className={`text-lg ${
              calculateTimeRatio(trip.publicTransitTime, trip.carTime) > 1.5
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {calculateTimeRatio(trip.publicTransitTime, trip.carTime)}
          </span>
          <span className="font-medium">
            Public transport Estimated market share:
          </span>
          <span>
            {publicTransportMarketShare(trip.publicTransitTime, trip.carTime)}%
          </span>
        </div>
      </div>
    </div>
  );
}
