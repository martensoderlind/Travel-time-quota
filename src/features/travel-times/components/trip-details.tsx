import { MapPin } from "lucide-react";
import { CarData, PublicTransport, Walk } from "../types";
import TripSection from "./trip-section";
import TripSectionAdjusted from "./trip-section-adjusted";
import TripCarSection from "./trip-car-section";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  carData: CarData;
};

export default function TripDetails({ tripData, carData }: Props) {
  return (
    <div className="flex flex-col space-x-2 mb-2 pt-2 mt-4 border-t">
      <div className="flex flex-row pl-4">
        <MapPin className="text-blue-500" />
        <span className="font-semibold pl-4">
          {tripData![0].Origin.time} →{" "}
          {tripData![tripData!.length - 1].Destination.time}
        </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <section className="flex flex-col mt-8 ml-8 md:ml-0">
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
        <section className="flex flex-col mt-4 sm:border-t md:border-t-0 sm:pt-4 md:border-l ml-4 pl-6">
          <h3 className="text-center font-semibold text-lg">
            Adjusted TravelTime{" "}
          </h3>
          {tripData?.map((trip, index) => (
            <TripSectionAdjusted
              key={index}
              sectionData={trip}
              originStreet={carData.waypoints[0].name}
              destinationStreet={carData.waypoints[1].name}
            />
          ))}
        </section>
        <section className="flex flex-col mt-4 sm:border-t md:border-t-0 sm:pt-4 md:border-l ml-4 pl-6">
          <h3 className="font-semibold text-lg">Adjusted TravelTime Car </h3>
          <TripCarSection carData={carData} />
        </section>
      </div>
    </div>
  );
}
