import React from "react";
import { CarData } from "../types";
import { Footprints, Car, CircleParking } from "lucide-react";

type Props = {
  carData: CarData;
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
        <span className="pl-4 font-semibold">
          {(carData.routes[0].duration / 60).toFixed(0)} min
        </span>
      </div>
      <ul className="steps steps-vertical">
        <li className="step step-neutral" data-content="●">
          <div className="pt-2">
            <span className="text-sm text-start">
              {carData.waypoints[0].name}
            </span>
          </div>
        </li>
        <li className="step step-neutral" data-content="●">
          <div>
            <span className="text-sm text-start">
              {carData.waypoints[1].name}
            </span>
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
