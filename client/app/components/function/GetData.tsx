import React, { useEffect, useState } from "react";
import { InvoiceCard } from "../InvoiceCard";
import { DataComponent } from "./DataJson";
import { ComponentFunctions } from "./Function";

interface Data {
  id: number;
  name: string;
}

export const GetData: React.FC = (props) => {
  return props.data.map((card, index) => (
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
