import React from "react";
import { InvoiceProduct } from "./InvoiceProduct";

interface CardProps {
  label: string;
  headerLabels: string[];
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
  isTotal: boolean;
}
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <div className="text-black font-extrabold text-xl mt-10">
        {props.label}:
      </div>
      <ul className="text-gray-600 border-2 border-slate-300 rounded">
        <li
          className={`px-5 h-10 grid grid-cols-${props.headerLabels.length} flex-col text-blue-900 font-bold items-center min-w-40 border-gray-300 text-center bg-slate-300
          `}
        >
          {props.headerLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </li>
        <li className="overflow-y-auto max-h-[600px]">
          <ul>
            {props.products.map((product, index) => (
              <InvoiceProduct
                key={index}
                index={index}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                isTotal={props.isTotal}
                onClick={
                  props.onClick
                    ? () => {
                        props.onClick(product);
                      }
                    : undefined
                }
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
