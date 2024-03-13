import React, { useEffect, useState } from "react";
import { InvoiceCard } from "../InvoiceCard";
import { DataComponent } from "./DataJson";
import { ComponentFunctions } from "./Function";

interface Data {
  // Define the structure of your data here
  id: number;
  name: string;
  // Add more properties as needed
}

export const GetData: React.FC = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    // Fetch data from the database or API
    const fetchData = async () => {
      const json = await DataComponent.getData();
      setData(json.result);
    };
    fetchData();
  }, []);

  return data.map((card, index) => (
    <InvoiceCard
      key={index}
      date={card.date}
      invoiceId={card.invoice_number}
      customerName={card.customer_name}
      notes={card.notes}
      products={card.products}
      sellerName={card.salesperson_name}
      headerLabels={["Image", "Name", "Price", "Quantity", "Total"]}
      isTotal={true}
    />
  ));
};
