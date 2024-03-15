"use client";
import { useState } from "react"; // Import useState hook
import { InvoiceCard } from "../app/components/InvoiceCard";
import { AddButton } from "../app/components/AddButton";
import { NavBar } from "../app/components/NavBar";
import { DataComponent } from "../app/components/function/DataJson";
import { Pagination } from "../app/components/Pagination";
import { GetData } from "../app/components/function/GetData";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]); // Add data state variable
  const [refresh, setRefresh] = useState(true); // Add refresh state variable
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state variable
  const [indexOfFirstCard, setIndexOfFirstCard] = useState(0); // Add indexOfFirstCard state variable
  const [indexOfLastCard, setIndexOfLastCard] = useState(10); // Add indexOfLastCard state variable
  const [totalPages, setTotalPages] = useState(1); // Add totalPages state variable
  // Calculate the index of the first and last card to display

  const fetchPaginationData = async (offset) => {
    const json = await DataComponent.getData(
      `http://localhost:8080/api/get-invoice?offset=${offset}`
    );
    setData(json.result);
  };

  useEffect(() => {
    // Fetch data from the database or API
    const fetchData = async () => {
      const json = await DataComponent.getData(
        `http://localhost:3000/api/get-all-invoice`
      );
      setTotalPages(json.result[0]["totalCards"] / 10 + 1);
    };
    fetchData();
    fetchPaginationData(indexOfFirstCard);
  }, []);

  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="invoice" />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          refreshPage={setRefresh}
          setIndexOfFirstCard={setIndexOfFirstCard}
          setIndexOfLastCard={setIndexOfLastCard}
          handlePageChange={setCurrentPage}
          fetchPaginationData={fetchPaginationData}
        />
        <div className="w-3/4">{refresh && <GetData data={data} />}</div>
      </div>
      <AddButton refresh={setRefresh} />
    </main>
  );
}
