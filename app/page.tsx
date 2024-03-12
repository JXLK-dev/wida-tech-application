"use client";
import { useState } from "react"; // Import useState hook
import { InvoiceCard } from "../app/components/InvoiceCard";
import { AddButton } from "../app/components/AddButton";
import { NavBar } from "../app/components/NavBar";
import { AxiosComponent } from "../app/components/function/DataJson";
import { Pagination } from "../app/components/Pagination";

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

  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state variable
  const cardsPerPage = 5; // Set the number of cards to display per page

  // Calculate the index of the first and last card to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="invoice" />
        <Pagination currentPage={currentPage} totalPages={10} />
        <div className="w-3/4">
          {currentCards.map((card, index) => (
            <InvoiceCard
              key={index}
              date={card.date}
              invoiceId={card.invoiceId}
              customerName={card.customerName}
              notes={card.notes}
              products={card.products}
              sellerName={card.sellerName}
              headerLabels={["Image", "Name", "Price", "Quantity", "Total"]}
              isTotal={true}
            />
          ))}
        </div>
      </div>
      <AddButton />
    </main>
  );
}
