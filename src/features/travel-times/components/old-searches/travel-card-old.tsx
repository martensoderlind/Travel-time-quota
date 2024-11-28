import { Bus, Car, MapPin } from "lucide-react";
import TravelDataOld from "./travel-data-old";
import { CarTripData, TripData } from "../../types";

type Props = {
  publicTripData: TripData | null;
  carTripData: CarTripData | null;
};

export default function TravelCardOld({ publicTripData, carTripData }: Props) {
  console.log("public trip data:", publicTripData);
  function calculateTravelTime(originTime: string, destinationTime: string) {
    const [hours1, minutes1, seconds1] = originTime.split(":").map(Number);
    const [hours2, minutes2, seconds2] = destinationTime.split(":").map(Number);

    const date1 = new Date(0, 0, 0, hours1, minutes1, seconds1);
    const date2 = new Date(0, 0, 0, hours2, minutes2, seconds2);

    const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

    // Konvertera till sekunder om så önskas
    return diffInMilliseconds / (1000 * 60);
    return "1";
  }
  return (
    <section className="collapse collapse-plus bg-white border-b shadow-md my-2">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium flex flex-row items-baseline ">
        <div className="flex flex-row">
          <MapPin className="text-blue-500" />
          <span className="font-semibold pl-4">
            {carTripData?.from} → {carTripData?.to}
          </span>
        </div>
        <div className="flex items-center space-x-2 pl-12 mt-1">
          <Bus className="text-green-500" />
          <span className="text-sm">
            {calculateTravelTime(
              publicTripData?.data[0].Origin.time,
              publicTripData?.data[publicTripData.data.length - 1].Destination
                .time
            )}{" "}
            min
          </span>
        </div>
        <div className="flex items-center space-x-2 pl-4">
          <Car className="text-slate-500" />
          <span className="text-sm">{carTripData?.duration} min</span>
        </div>
      </div>
      <article className="collapse-content">
        <TravelDataOld tripData={publicTripData!.data} carData={carTripData} />
      </article>
    </section>
  );
}
