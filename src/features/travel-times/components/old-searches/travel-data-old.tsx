import { CarTripData, PublicTransport, Walk } from "../../types";
import TripCarSection from "../trip-car-section";
import TripSection from "../trip-section";
import TripSectionAdjusted from "../trip-section-adjusted";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  carData: CarTripData | null;
};
export default function TravelDataOld({ tripData, carData }: Props) {
  return (
    <div className="space-x-2 mb-2 pt-2 mt-4 border-t ">
      <div className="flex flex-col md:flex-row justify-around">
        <section className="flex flex-col mt-8 md:ml-0 w-1/3">
          <h3 className="font-semibold text-lg text-center">TravelTime </h3>
          {tripData?.map((trip, index) => (
            <TripSection
              key={index}
              sectionData={trip}
              originStreet={carData!.from}
              destinationStreet={carData!.to}
            />
          ))}
        </section>
        <section className="flex flex-col mt-4 sm:border-t md:border-t-0 sm:pt-4 md:border-l ml-4 pl-6 w-1/3">
          <h3 className="text-center font-semibold text-lg">
            Adjusted TravelTime{" "}
          </h3>
          {tripData?.map((trip, index) => (
            <TripSectionAdjusted
              key={index}
              sectionData={trip}
              originStreet={carData!.from}
              destinationStreet={carData!.to}
            />
          ))}
        </section>
        <section className="flex flex-col mt-4 sm:border-t md:border-t-0 sm:pt-4 md:border-l ml-4 pl-6 w-1/3">
          <h3 className="font-semibold text-lg text-center">
            Adjusted TravelTime Car{" "}
          </h3>
          <TripCarSection carData={carData!} />
        </section>
      </div>
    </div>
  );
}
