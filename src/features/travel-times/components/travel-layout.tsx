"use client";
import { MapPin, Car, Bus } from "lucide-react";
import { useState } from "react";

export default function TravelLayout() {
  const [trips] = useState([
    {
      id: 1,
      from: { lat: 59.3293, lng: 18.0686, name: "Stockholm C" },
      to: { lat: 59.3642, lng: 17.9739, name: "Sundbyberg" },
      publicTransitTime: 15,
      carTime: 12,
    },
    {
      id: 2,
      from: { lat: 59.3293, lng: 18.0686, name: "Stockholm C" },
      to: { lat: 59.3099, lng: 18.0289, name: "Södermalm" },
      publicTransitTime: 20,
      carTime: 10,
    },
  ]);
  function calculateTimeRatio(transit: number, car: number) {
    return Number((transit / car).toFixed(2));
  }
  return (
    <div className="container mx-auto rounded-md space-y-4 mb-4 shadow-md bg-white w-8/12">
      {trips.map((trip) => (
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
      ))}
    </div>
  );
}
