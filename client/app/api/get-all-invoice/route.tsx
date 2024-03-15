import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const querySql = "SELECT COUNT(invoice_number) AS 'totalCards' FROM invoice";
  const result = await query(querySql);
  return NextResponse.json({ result: result });
}
