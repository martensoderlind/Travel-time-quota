import { Bus, Car, MapPin } from "lucide-react";
import TravelDataOld from "./travel-data-old";
import { CarTripData, TripData } from "../../types";

type Props = {
  publicTripData: TripData | null;
  carTripData: CarTripData | null;
};

export default function TravelCardOld({ publicTripData, carTripData }: Props) {
  return (
    <section className="collapse collapse-plus bg-white border-b shadow-md my-2">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium flex flex-row items-baseline ">
        <div className="flex flex-row">
          <MapPin className="text-blue-500" />
          <span className="font-semibold pl-4">
            {carTripData?.from} → {carTripData?.to}
          </span>
        </div>
        <div className="flex items-center space-x-2 pl-12 mt-1">
          <Bus className="text-green-500" />
          <span className="text-sm">15 min</span>
        </div>
        <div className="flex items-center space-x-2 pl-4">
          <Car className="text-slate-500" />
          <span className="text-sm">11 min</span>
        </div>
      </div>
      <article className="collapse-content">
        <TravelDataOld tripData={publicTripData!.data} carData={carTripData} />
      </article>
    </section>
  );
}
