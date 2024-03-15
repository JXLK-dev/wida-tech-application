import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
};

export async function query(query, values = []) {
  const dbconnection = await mysql.createConnection(config);
  try {
    const [result] = await dbconnection.execute(query, values);
    dbconnection.end();
    return result;
  } catch (error) {
    return { error };
  }
}
