import { CarTripData, PublicTransport, Walk } from "../../types";
import TripSection from "../trip-section";
import TripSectionAdjusted from "../trip-section-adjusted";
import TripCarSectionOld from "./trip-car-section-old";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  carData: CarTripData | null;
};
export default function TravelDataOld({ tripData, carData }: Props) {
  function calculateTimeRatio(transit: number, car: number) {
    return Number((transit / car).toFixed(2));
  }
  function calculateTravelTime(originTime: string, destinationTime: string) {
    const [hours1, minutes1, seconds1] = originTime.split(":").map(Number);
    const [hours2, minutes2, seconds2] = destinationTime.split(":").map(Number);

    const date1 = new Date(0, 0, 0, hours1, minutes1, seconds1);
    const date2 = new Date(0, 0, 0, hours2, minutes2, seconds2);

    const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

    // Konvertera till sekunder om så önskas
    return diffInMilliseconds / (1000 * 60);
  }
  return (
    <div className="space-x-2 mb-2 pt-2 mt-4 border-t ">
      <div className="flex mb-2 ml-10">
        <span className="font-medium">Travel Time Ratio</span>
        <span
          className={`text-lg ${
            calculateTimeRatio(
              calculateTravelTime(
                tripData![0].Origin.time,
                tripData![tripData!.length - 1].Destination.time
              ),
              carData!.duration
            ) > 1.5
              ? "text-red-500"
              : "text-green-500"
          } ml-8`}
        >
          {calculateTimeRatio(
            calculateTravelTime(
              tripData![0].Origin.time,
              tripData![tripData!.length - 1].Destination.time
            ),
            carData!.duration
          )}
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <section className="flex flex-col mt-8 md:ml-0 w-1/3 opacity-60 hover:opacity-100">
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
          <TripCarSectionOld carData={carData!} />
        </section>
      </div>
    </div>
  );
}
