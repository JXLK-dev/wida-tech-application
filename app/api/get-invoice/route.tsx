import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const offset = urlParams.get("offset");
  const querySql = `SELECT * FROM invoice LIMIT 10 OFFSET ${offset}`;
  const result = await query(querySql);
  const queryProduct =
    "SELECT * FROM products WHERE invoice_number IN (SELECT invoice_number FROM invoice)";
  const product = await query(queryProduct);
  const cleaned = result.map((invoice) => {
    const filteredProduct = product.filter(
      (p) => p.invoice_number === invoice.invoice_number
    );
    return { ...invoice, products: filteredProduct };
  });
  return NextResponse.json({ result: cleaned });
}
