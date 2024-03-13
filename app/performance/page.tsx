"use client";
import { InvoiceCard } from "../components/InvoiceCard";
import { AddButton } from "../components/AddButton";
import { NavBar } from "../components/NavBar";
import { LineChart } from "./components/LineChart";
import { useState } from "react";
export default function Home() {
  const [view, setView] = useState("daily");
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="performance" />
        <div className="w-3/4">
          <LineChart chartType={view} />
        </div>
      </div>
    </main>
  );
}
