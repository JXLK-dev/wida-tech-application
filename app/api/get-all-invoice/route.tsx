import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const offset = urlParams.get("offset");
  const querySql = "SELECT COUNT(invoice_number) AS 'totalCards' FROM invoice";
  const result = await query(querySql);
  return NextResponse.json({ result: result });
}
