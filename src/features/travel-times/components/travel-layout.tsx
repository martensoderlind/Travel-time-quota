"use client";
import { useState } from "react";
import TravelCard from "./travel-card";

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
  return (
    <div className="container mx-auto rounded-md space-y-4 mb-4 shadow-md bg-white w-8/12">
      {trips.map((trip, index) => (
        <TravelCard key={index} trip={trip} />
      ))}
    </div>
  );
}
