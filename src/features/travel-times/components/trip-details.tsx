import { MapPin } from "lucide-react";
import { PublicTransport, Walk } from "../types";
import TripSection from "./trip-section";
import TripSectionAdjusted from "./trip-section-adjusted";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  originStreet: string;
  destinationStreet: string;
};

export default function TripDetails({
  tripData,
  originStreet,
  destinationStreet,
}: Props) {
  return (
    <div className="flex flex-col space-x-2 mb-2 pt-2 mt-4 border-t">
      <div className="flex flex-row pl-4">
        <MapPin className="text-blue-500" />
        <span className="font-semibold pl-4">
          {tripData![0].Origin.time} →{" "}
          {tripData![tripData!.length - 1].Destination.time}
        </span>
      </div>
      <div className="flex flex-row">
        <section className="flex flex-col mt-4">
          <h3 className=" font-semibold text-lg">TravelTime </h3>
          {tripData?.map((trip, index) => (
            <TripSection
              key={index}
              sectionData={trip}
              originStreet={originStreet}
              destinationStreet={destinationStreet}
            />
          ))}
        </section>
        <section className="flex flex-col mt-4">
          <h3 className="text-center font-semibold text-lg">
            Adjusted TravelTime{" "}
          </h3>
          {tripData?.map((trip, index) => (
            <TripSectionAdjusted
              key={index}
              sectionData={trip}
              originStreet={originStreet}
              destinationStreet={destinationStreet}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
