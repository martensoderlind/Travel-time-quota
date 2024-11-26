import TravelCard from "./travel-card";
import { PublicTransport, Walk } from "../types";

type Props = {
  tripData: PublicTransport[] | Walk[] | null;
};

export default function TravelLayout({ tripData }: Props) {
  return (
    <div className="container mx-auto rounded-md space-y-4 mb-4 shadow-md bg-white w-8/12">
      {tripData !== null ? <TravelCard tripData={tripData} /> : undefined}
    </div>
  );
}
