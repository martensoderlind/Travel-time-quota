import { MapPin } from "lucide-react";
import { CarData, PublicTransport, Walk } from "../types";
import TripSection from "./trip-section";
import TripSectionAdjusted from "./trip-section-adjusted";
import TripCarSection from "./trip-car-section";
import { saveTravelData } from "../actions";
import { useState } from "react";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
  carData: CarData;
};

export default function TripDetails({ tripData, carData }: Props) {
  const [tripDetails, setTripDetails] = useState<boolean>(false);
  const handleChange = () => {
    setTripDetails((tripDetails) => !tripDetails);
  };
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
        {/* <section className="flex flex-col mt-8 ml-8 md:ml-0">
          <h3 className=" font-semibold text-lg">TravelTime </h3>
          {tripData?.map((trip, index) => (
            <TripSection
              key={index}
              sectionData={trip}
              originStreet={carData.waypoints[0].name}
              destinationStreet={carData.waypoints[1].name}
            />
          ))}
        </section> */}
        {/* <section className="flex flex-col mt-4 sm:border-t md:border-t-0 sm:pt-4"> */}
        {/* <h3 className="font-semibold text-lg">Adjusted TravelTime </h3> */}
        <div>
          {tripDetails ? (
            <section className="sm:pt-4 w-64">
              <h3 className=" font-semibold text-lg">TravelTime </h3>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text pr-2">Show adjusted trip</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-xs"
                    onClick={handleChange}
                  />
                </label>
              </div>
              {tripData?.map((trip, index) => (
                <TripSection
                  key={index}
                  sectionData={trip}
                  originStreet={carData.waypoints[0].name}
                  destinationStreet={carData.waypoints[1].name}
                />
              ))}
            </section>
          ) : (
            <>
              <section className="sm:pt-4 w-64">
                <h3 className="font-semibold text-lg">Adjusted TravelTime </h3>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text pr-2">Show actual trip</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-xs"
                      onClick={handleChange}
                    />
                  </label>
                </div>
                {tripData?.map((trip, index) => (
                  <TripSectionAdjusted
                    key={index}
                    sectionData={trip}
                    originStreet={carData.waypoints[0].name}
                    destinationStreet={carData.waypoints[1].name}
                  />
                ))}
              </section>
            </>
          )}
        </div>
        <section className="flex flex-col mt-8 sm:border-t md:border-t-0 sm:pt-4">
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
