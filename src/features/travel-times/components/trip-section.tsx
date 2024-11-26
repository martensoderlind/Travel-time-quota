import React from "react";
import { PublicTransport, Walk } from "../types";
import { Footprints, BusFront } from "lucide-react";

type Props = {
  sectionData: PublicTransport | Walk;
};

export default function TripSection({ sectionData }: Props) {
  return (
    <>
      {sectionData.type === "WALK" ? (
        <>
          <div className="pl-2 mt-4 flex flex-row">
            <Footprints />
            <span className="pl-4 font-semibold">
              {sectionData.duration.replace(/[PTM]/g, "")} min
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="pl-2  flex flex-row">
            <BusFront />
            <span className="pl-4 font-semibold">
              {sectionData.duration.replace(/[PTM]/g, "")} min
            </span>
          </div>
        </>
      )}
      <div>
        <ul className="steps steps-vertical">
          <li
            className={`step ${
              sectionData.type === "WALK" ? "step-warning" : "step-primary"
            }`}
            data-content="●"
          >
            <div className="pt-2">
              <span className="text-sm text-start">
                {sectionData.Origin.name
                  .replace(/\s*\(Stockholm kn\)/g, "")
                  .trim()}
              </span>
              <p className="text-xs text-start">{sectionData.Origin.time}</p>
            </div>
          </li>
          <li
            className={`step ${
              sectionData.type === "WALK" ? "step-warning" : "step-primary"
            }`}
            data-content="●"
          >
            <div>
              <span className="text-sm text-start">
                {sectionData.Destination.name
                  .replace(/\s*\(Stockholm kn\)/g, "")
                  .trim()}
              </span>
              <p className="text-xs text-start">
                {sectionData.Destination.time}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
