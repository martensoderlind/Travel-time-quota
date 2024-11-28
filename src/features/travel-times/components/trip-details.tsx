import { MapPin } from "lucide-react";
import { CarData, PublicTransport, Walk } from "../types";
import TripSection from "./trip-section";
import TripSectionAdjusted from "./trip-section-adjusted";
import TripCarSection from "./trip-car-section";
import { saveTravelData } from "../actions";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  carData: CarData;
};

export default function TripDetails({ tripData, carData }: Props) {
  async function onClick() {
    await saveTravelData(tripData!, carData);
  }
  return (
    <div className="flex flex-col space-x-2 mb-2 pt-2 mt-4 border-t w-full">
      <div className="flex flex-row pl-2">
        <MapPin className="text-blue-500" />
        <span className="font-semibold pl-4">
          {tripData![0].Origin.time} →{" "}
          {tripData![tripData!.length - 1].Destination.time}
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <section className="sm:pt-4 w-64 opacity-60 hover:opacity-100">
          <h3 className=" font-semibold text-lg">TravelTime </h3>
          {tripData?.map((trip, index) => (
            <TripSection
              key={index}
              sectionData={trip}
              originStreet={carData.waypoints[0].name}
              destinationStreet={carData.waypoints[1].name}
            />
          ))}
        </section>
        <section className="sm:pt-4 w-64 sm:border-t md:border-t-0">
          <h3 className="font-semibold text-lg">Adjusted TravelTime </h3>
          {tripData?.map((trip, index) => (
            <TripSectionAdjusted
              key={index}
              sectionData={trip}
              originStreet={carData.waypoints[0].name}
              destinationStreet={carData.waypoints[1].name}
            />
          ))}
        </section>
        <section className="flex flex-col sm:border-t md:border-t-0 sm:pt-4">
          <h3 className="font-semibold text-lg">Adjusted TravelTime Car </h3>
          <TripCarSection carData={carData} />
        </section>
      </div>
      <button
        className="btn mt-4 btn-secondary w-full md:w-4/12 self-center"
        onClick={onClick}
      >
        Save
      </button>
    </div>
  );
}
