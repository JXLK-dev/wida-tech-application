import React from "react";
import { Card } from "./Card";

interface InvoiceCardProps {
  date: string;
  invoiceId: string;
  customerName: string;
  sellerName: string;
  notes: string;
  headerLabels: string[];
  products: {}[];
  isTotal: boolean;
}
export const InvoiceCard: React.FC<InvoiceCardProps> = (props) => {
  const formattedDate = props.date.substring(0, 10);

  return (
    <div className=" bg-white rounded-lg shadow-lg p-6 border-4 my-10">
      <div className="text-lg font-bold text-gray-800">
        Invoice ID: {props.invoiceId} ({props.customerName})
      </div>
      <div className="text-gray-600">Date: {formattedDate}</div>
      <div className="text-gray-600">Customer Name: {props.customerName}</div>
      <div className="text-gray-600">Salesperson Name: {props.sellerName}</div>
      <div className="text-gray-600">Notes: {props.notes}</div>
      <Card
        label="Products"
        headerLabels={props.headerLabels}
        products={props.products}
        isTotal={props.isTotal}
      />
    </div>
  );
};
