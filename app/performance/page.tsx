"use client";
import { InvoiceCard } from "../components/InvoiceCard";
import { AddButton } from "../components/AddButton";
import { NavBar } from "../components/NavBar";

export default function Home() {
  const cards = [
    {
      date: "2022-01-01",
      invoiceId: "INV001",
      customerName: "John Doe",
      sellerName: "Jane Doe",
      notes: "Lorem ipsum dolor sit amet",
      products: [
        { name: "Product 1", price: 10 },
        { name: "Product 2", price: 20 },
        { name: "Product 3", price: 30 },
      ],
    },
    {
      date: "2022-01-01",
      invoiceId: "INV001",
      customerName: "John Doe",
      sellerName: "Jane Doe",
      notes: "Lorem ipsum dolor sit amet",
      products: [
        { name: "Product 1", price: 10 },
        { name: "Product 2", price: 20 },
        { name: "Product 3", price: 30 },
      ],
    },
    // Add more card objects as needed
  ];
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="performance" />
        <div className="w-3/4"></div>
      </div>
    </main>
  );
}
