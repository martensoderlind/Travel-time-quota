import { Bus, Car, MapPin } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="collapse collapse-plus bg-white border-b shadow-md my-2">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium flex flex-row items-baseline ">
        <div className="flex flex-row">
          <MapPin className="text-blue-500" />
          <span className="font-semibold pl-4"></span>
        </div>
        <div className="flex items-center space-x-2 pl-12 mt-1">
          <Bus className="text-green-500" />
          <span className="text-sm">... min</span>
        </div>
        <div className="flex items-center space-x-2 pl-4">
          <Car className="text-slate-500" />
          <span className="text-sm">... min</span>
        </div>
      </div>
      <article className="collapse-content"></article>
    </section>
  );
}
