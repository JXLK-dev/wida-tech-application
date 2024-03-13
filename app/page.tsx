"use client";
import { useState } from "react"; // Import useState hook
import { InvoiceCard } from "../app/components/InvoiceCard";
import { AddButton } from "../app/components/AddButton";
import { NavBar } from "../app/components/NavBar";
import { DataComponent } from "../app/components/function/DataJson";
import { Pagination } from "../app/components/Pagination";
import { GetData } from "../app/components/function/GetData";

export default function Home() {
  const [data, setData] = useState([]); // Add data state variable
  const [refresh, setRefresh] = useState(true); // Add refresh state variable
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state variable
  const cardsPerPage = 10; // Set the number of cards to display per page

  // Calculate the index of the first and last card to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="invoice" />
        <Pagination currentPage={currentPage} totalPages={10} />
        <div className="w-3/4">{refresh && <GetData />}</div>
      </div>
      <AddButton refresh={setRefresh} />
    </main>
  );
}
