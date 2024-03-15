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

export const GetData: React.FC = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the database or API
    const fetchData = async () => {
      const json = await DataComponent.getData(
        `http://localhost:8080/api/get-invoice?offset=${props.offset}`
      );
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
