import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const offset = urlParams.get("offset");
  const querySql = `SELECT * FROM invoice LIMIT 10 OFFSET ${offset}`;
  const result = await query(querySql);
  const cleaned = result.map(async (invoice) => {
    const queryProduct = `SELECT * FROM products WHERE invoice_number = '${invoice.invoice_number}'`;
    const product = await query(queryProduct);
    console.log(product);
    return { ...invoice, products: product };
  });
  return NextResponse.json({ result: cleaned });
}
