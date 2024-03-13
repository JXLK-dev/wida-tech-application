import { NextResponse } from "next/server";
import { query } from "../db";

export async function POST(req: Request) {
  const reqJson = await req.json();
  const dataJson = JSON.parse(reqJson["body"]);
  try {
    const querySql =
      "INSERT INTO invoice (invoice_date, customer_name, salesperson_name, notes) VALUES (?,?,?,?)";
    const values = [
      dataJson.date,
      dataJson.customerName,
      dataJson.salespersonName,
      dataJson.notes,
    ];
    const result = await query(querySql, values);
    if (result.insertId) {
      return NextResponse.json({ message: "Success" });
    } else {
      return NextResponse.error({ message: "Failed" });
    }
  } catch (error) {
    return NextResponse.error(error.response.data.message);
  }
}
