import React from "react";
import { CarTripData } from "../types";
import { Footprints, Car, CircleParking } from "lucide-react";

type Props = {
  carData: CarTripData;
};

export default function TripCarSection({ carData }: Props) {
  return (
    <div className="">
      <div className="pl-2 mt-4 flex flex-row">
        <Footprints />
        <span className="pl-4 font-semibold">3 min</span>
      </div>
      <div className="pl-2 mt-4 flex flex-row">
        <Car />
        <span className="pl-4 font-semibold">{carData.duration} min</span>
      </div>
      <ul className="steps steps-vertical">
        <li className="step step-neutral" data-content="●">
          <div className="pt-2">
            <span className="text-sm text-start">{carData.from}</span>
          </div>
        </li>
        <li className="step step-neutral" data-content="●">
          <div>
            <span className="text-sm text-start">{carData.to}</span>
          </div>
        </li>
      </ul>
      <div className="pl-2 mt-4 flex flex-row">
        <CircleParking />
        <span className="pl-4 font-semibold">6 min</span>
      </div>
      <div className="pl-2 mt-6 flex flex-row">
        <Footprints />
        <span className="pl-4 font-semibold">3 min</span>
      </div>
    </div>
  );
}
