import TravelMap from "@/features/travel-times/components/travel-map";
import TravelForm from "@/features/travel-times/components/travel-form";
import TravelLayout from "@/features/travel-times/components/travel-layout";

export default function search() {
  return (
    <div>
      <TravelMap />
      <TravelForm />
      <TravelLayout />
    </div>
  );
}
