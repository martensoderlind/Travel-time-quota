"use client";
import { useEffect, useState } from "react";
import { CarTripData, TripData } from "../../types";
import TravelCardOld from "./travel-card-old";
import { getCarTripData, getTripData } from "../../actions";

export default function OldSearches() {
  const [publicTripData, setPublicTripData] = useState<TripData[] | null>(null);
  const [carTripData, setCarTripData] = useState<CarTripData[] | null>(null);

  useEffect(() => {
    const processTrip = async () => {
      try {
        const tripData = await getTripData();
        const carData = await getCarTripData();
        setPublicTripData(tripData);
        setCarTripData(carData);
      } catch (error) {
        console.error("Kunde inte bearbeta resedata:", error);
      }
    };

    processTrip();
  }, []);

  return (
    <div className="conatiner mx-auto w-8/12 my-4 rounded-md">
      {publicTripData !== null &&
        carTripData !== null &&
        publicTripData.map((trip, index) => (
          <TravelCardOld
            key={index}
            publicTripData={publicTripData[index]}
            carTripData={carTripData[index]}
          />
        ))}
    </div>
  );
}
