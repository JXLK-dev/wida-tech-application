import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const querySql = "SELECT * FROM invoice";
  const result = await query(querySql);
  const queryProduct = "SELECT * FROM products";
  const product = await query(queryProduct);
  const cleaned = result.map((invoice) => {
    const filteredProduct = product.filter(
      (p) => p.invoice_number === invoice.invoice_number
    );
    return { ...invoice, products: filteredProduct };
  });
  return NextResponse.json({ result: cleaned });
}
