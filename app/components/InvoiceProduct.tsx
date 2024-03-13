import React from "react";

import Image from "next/image";

import { ComponentFunctions } from "./function/Function";

interface InvoiceProductProps {
  index: number;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  isTotal: boolean;
}

export const InvoiceProduct: React.FC<InvoiceProductProps> = (props) => {
  return (
    <li
      onClick={props.onClick}
      className={`px-5 grid grid-cols-${
        props.isTotal ? "5" : "4"
      } flex-col items-center border-gray-300 min-h-10 text-center break-words space-x-5 ${
        props.index % 2 === 0 ? "bg-white" : "bg-slate-200"
      } ${props.onClick && "cursor-pointer"}`}
    >
      <Image
        className="lg:min-w-40 md:min-w-28 min-w-20"
        src={props.imageSrc}
        alt={props.name}
        width={50}
        height={50}
      />
      <span>{props.name}</span>
      <span className="w-fit">
        {ComponentFunctions.formatCurrency(props.price)}
      </span>
      <span>{props.quantity}</span>
      {props.isTotal && (
        <span className="w-fit">
          {ComponentFunctions.formatCurrency(props.price * props.quantity)}
        </span>
      )}
    </li>
  );
};
