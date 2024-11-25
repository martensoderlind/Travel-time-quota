import Navbar from "@/app/navbar";
import "leaflet/dist/leaflet.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-slate-200">{children}</main>
    </>
  );
}
