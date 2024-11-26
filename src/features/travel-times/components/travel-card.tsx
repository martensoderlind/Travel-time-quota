import { MapPin, Car, Bus } from "lucide-react";
import { PublicTransport, Walk } from "../types";
import { useEffect, useState } from "react";
import { adjustedTravelTime } from "../actions";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
};

type Trip = {
  originTime: string;
  destTime: string;
  from: string;
  to: string;
  publicTransitTime: number;
  carTime: number;
};

export default function TravelCard({ tripData }: Props) {
  const [tripInformation, setProcessedTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const processTrip = async () => {
      if (tripData) {
        try {
          const trip = await adjustedTravelTime(tripData);
          setProcessedTrip(trip);
        } catch (error) {
          console.error("Kunde inte bearbeta resedata:", error);
        }
      }
    };

    processTrip();
  }, [tripData]);

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
      {tripInformation ? (
        <>
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="text-blue-500" />
            <span className="font-medium">
              {tripInformation!.from} → {tripInformation!.to}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Bus className="text-green-500" />
              <span>{tripInformation!.publicTransitTime} min</span>
            </div>

            <div className="flex items-center space-x-2">
              <Car className="text-gray-500" />
              <span>{tripInformation!.carTime} min</span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium">Travel Time Quota:</span>
              <span
                className={`text-lg ${
                  calculateTimeRatio(
                    tripInformation!.publicTransitTime,
                    tripInformation!.carTime
                  ) > 1.5
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {calculateTimeRatio(
                  tripInformation!.publicTransitTime,
                  tripInformation!.carTime
                )}
              </span>
              <span className="font-medium">
                Public transport Estimated market share:
              </span>
              <span>
                {publicTransportMarketShare(
                  tripInformation!.publicTransitTime,
                  tripInformation!.carTime
                )}
                %
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Loading..</p>
          </div>
        </>
      )}
    </div>
  );
}
