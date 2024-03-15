import React, { useEffect, useState } from "react";
import { InvoiceCard } from "../InvoiceCard";
import { DataComponent } from "./DataJson";
import { ComponentFunctions } from "./Function";

interface Data {
  id: number;
  name: string;
}

export const GetData: React.FC = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
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
      date={card.invoice_date}
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
