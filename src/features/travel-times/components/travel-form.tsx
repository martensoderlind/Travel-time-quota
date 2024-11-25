"use client";
import { MapPin, MapPinCheckInside } from "lucide-react";
import { tripByCoordinates } from "../actions";

type Props = {
  from: string;
  to: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
};

export default function TravelForm({ from, to, setFrom, setTo }: Props) {
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) {
    const fromInput = e.target.value;
    console.log("from", fromInput);
    setValue(fromInput);
  }

  return (
    <form
      action={tripByCoordinates}
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
              id="from"
              name="from"
              placeholder="From"
              onChange={(e) => handleInputChange(e, setFrom)}
              value={from}
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
              id="to"
              name="to"
              placeholder="To"
              onChange={(e) => handleInputChange(e, setTo)}
              value={to}
              required
            />
          </label>
        </div>
      </section>

      <button className="btn my-2" type="submit">
        Search
      </button>
    </form>
  );
}
