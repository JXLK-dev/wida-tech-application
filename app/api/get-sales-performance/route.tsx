import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const querySql =
    "SELECT invoice.invoice_date, (products.price*products.quantity) AS 'Revenue' FROM invoice JOIN products ON invoice.invoice_number = products.invoice_number ORDER BY invoice.invoice_date DESC";
  const result = await query(querySql);
  return NextResponse.json({ result: result });
}
