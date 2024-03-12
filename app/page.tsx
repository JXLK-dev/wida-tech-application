"use client";
import { InvoiceCard } from "../app/components/InvoiceCard";
import { AddButton } from "../app/components/AddButton";
import { NavBar } from "../app/components/NavBar";

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
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-gradient-to-r from-blue-900 to-cyan-500">
      <div className="flex flex-col md:flex-row justify-end">
        <NavBar page="invoice" />
        <div className="w-3/4">
          {cards.map((card, index) => (
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
