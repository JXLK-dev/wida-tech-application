"use client";
import { useState } from "react"; // Import useState hook
import { InvoiceCard } from "../app/components/InvoiceCard";
import { AddButton } from "../app/components/AddButton";
import { NavBar } from "../app/components/NavBar";
import { DataComponent } from "../app/components/function/DataJson";
import { Pagination } from "../app/components/Pagination";
import { GetData } from "../app/components/function/GetData";

export default function Home() {
  const cards = [
    {
      date: "2022-01-01",
      invoiceId: "INV001",
      customerName: "John Doe",
      sellerName: "Jane Doe",
      notes: "Lorem ipsum dolor sit amet",
      products: [
        { name: "Product 1", price: 10, quantity: 1 },
        { name: "Product 2", price: 20, quantity: 1 },
        { name: "Product 3", price: 30, quantity: 1 },
      ],
    },
    {
      date: "2022-01-01",
      invoiceId: "INV001",
      customerName: "John Doe",
      sellerName: "Jane Doe",
      notes: "Lorem ipsum dolor sit amet",
      products: [
        { name: "Product 1", price: 10, quantity: 1 },
        { name: "Product 2", price: 20, quantity: 1 },
        { name: "Product 3", price: 30, quantity: 1 },
      ],
    },
    // Add more card objects as needed
  ];
  const [data, setData] = useState([]); // Add data state variable
  const retrieveData = () => {
    const data = DataComponent.getData();
    setData(data);
  };

  // const [currentPage, setCurrentPage] = useState(1); // Add currentPage state variable
  // const cardsPerPage = 10; // Set the number of cards to display per page

  // Calculate the index of the first and last card to display
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="invoice" />
        {/* <Pagination currentPage={currentPage} totalPages={10} /> */}
        <div className="w-3/4">
          <GetData />
        </div>
      </div>
      <AddButton />
    </main>
  );
}
