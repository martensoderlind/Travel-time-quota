"use client";
import TravelMap from "@/features/travel-times/components/travel-map";
import TravelForm from "@/features/travel-times/components/travel-form";
import TravelLayout from "@/features/travel-times/components/travel-layout";
import { useState } from "react";

export default function Page() {
  const [from, setForm] = useState("");
  const [to, setTo] = useState("");
  return (
    <div>
      <TravelMap setForm={setForm} setTo={setTo} from={from} />
      <TravelForm from={from} to={to} />
      <TravelLayout />
    </div>
  );
}
