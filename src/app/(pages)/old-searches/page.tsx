import OldSearches from "@/features/travel-times/components/old-searches/old-searches";
import Loading from "./loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <OldSearches />
      </Suspense>
    </div>
  );
}
