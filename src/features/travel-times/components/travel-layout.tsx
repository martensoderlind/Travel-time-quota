"use client";
import { db as trips } from "@/features/fixtures/mockdb";
import TravelCard from "./travel-card";

export default function TravelLayout() {
  //import trips
  return (
    <div className="container mx-auto rounded-md space-y-4 mb-4 shadow-md bg-white w-8/12">
      {trips.map((trip, index) => (
        <TravelCard key={index} trip={trip} />
      ))}
    </div>
  );
}
