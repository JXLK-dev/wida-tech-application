import { NextResponse } from "next/server";
import { query } from "../db";

export async function POST(req: Request) {
  const uniqueInvoiceId = `INV-${Date.now()}`;
  const reqJson = await req.json();
  const dataJson = JSON.parse(reqJson["body"]);
  try {
    const querySqlProduct =
      "INSERT INTO products (invoice_number, name, price, quantity,imgSrc) VALUES (?,?,?,?,?)";

    dataJson.products.map(async (product) => {
      const productValues = [
        uniqueInvoiceId,
        product.name,
        product.price,
        product.quantity,
        product.imgSrc,
      ];
      await query(querySqlProduct, productValues);
    });
    const querySql =
      "INSERT INTO invoice (invoice_number,invoice_date, customer_name, salesperson_name, notes) VALUES (?,?,?,?,?)";
    const values = [
      uniqueInvoiceId,
      dataJson.date,
      dataJson.customerName,
      dataJson.salespersonName,
      dataJson.notes,
    ];
    const result = await query(querySql, values);
    return NextResponse.json({ message: "Invoice inserted successfully" });
  } catch (error) {
    return NextResponse.error(error.response.data.message);
  }
}
