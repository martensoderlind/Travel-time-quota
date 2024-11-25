import { MapPin, MapPinCheckInside } from "lucide-react";
import { tripByCoordinates } from "../actions";

export default async function TravelForm() {
  async function onClick() {
    "use server";
    const origin = {
      lat: "59.3293",
      lng: "18.0686",
    };
    const destination = {
      lat: "59.3378",
      lng: "18.0125",
    };
    const data = await tripByCoordinates(origin, destination);
    console.log("data:", data);
  }
  return (
    <form
      autoComplete="off"
      className=" container mx-auto flex flex-col items-center m-4 p-4 bg-slate-100 rounded-md w-full md:w-8/12 shadow-lg"
    >
      <h1 className=" text-3xl text-center text-gray-900">Sök din resa</h1>
      <section className="flex flex-row">
        <div className="flex flex-col p-2">
          <label className="input input-bordered flex items-center gap-2 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <MapPin className="text-blue-500" size={16} />
            </svg>
            <input
              type="text"
              className="grow"
              id="name"
              name="name"
              placeholder="From"
              required
            />
          </label>
        </div>
        <div className="flex flex-col p-2">
          <label className="input input-bordered flex items-center gap-2 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <MapPinCheckInside className="text-blue-500" size={16} />
            </svg>
            <input
              type="text"
              className="grow"
              id="name"
              name="name"
              placeholder="To"
              required
            />
          </label>
        </div>
      </section>

      <button className="btn my-2" type="submit" onClick={onClick}>
        Search
      </button>
    </form>
  );
}
