import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req: Request) {
  const querySql = "SELECT * FROM invoice";
  const result = await query(querySql);
  return NextResponse.json({ message: result });
}
