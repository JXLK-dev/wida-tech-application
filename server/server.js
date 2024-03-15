const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
// Define your routes here

const config = {
  host: "sql6.freemysqlhosting.net",
  user: "sql6690801",
  password: "BqAzB61Sz3",
  database: "sql6690801",
  port: "3306",
};

const query = async (query, values) => {
  try {
    const dbconnection = await mysql.createConnection(config);
    const [result] = await dbconnection.execute(query, values);
    dbconnection.end();
    return result;
  } catch (error) {
    res.json({ error });
  }
};
app.get("/api/get-invoice", async (req, res) => {
  const result = await query(
    `SELECT * FROM invoice LIMIT 10 OFFSET ${req.query.offset}`
  );
  const queryProduct =
    "SELECT * FROM products WHERE invoice_number IN (SELECT invoice_number FROM invoice)";
  const product = await query(queryProduct);
  const cleaned = result.map((invoice) => {
    const filteredProduct = product.filter(
      (p) => p.invoice_number === invoice.invoice_number
    );
    return { ...invoice, products: filteredProduct };
  });
  res.json({ result: cleaned });
  // next();
});

app.post("/api/insert-invoice", async (req, res) => {
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
    return res.json({ message: "Invoice inserted successfully" });
  } catch (error) {
    return res.error(error.response.data.message);
  }
});
app.get("/api/get-products", async (req, res) => {
  const querySql = "SELECT * FROM products";
  const result = await query(querySql);
  res.json({ result: result });
});
app.get("/api/get-sales-performance", async (req, res) => {
  const querySql =
    "SELECT invoice.invoice_date, (products.price*products.quantity) AS 'Revenue' FROM invoice JOIN products ON invoice.invoice_number = products.invoice_number ORDER BY invoice.invoice_date DESC";
  const result = await query(querySql);
  res.json({ result: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
