import { NextResponse } from "next/server";
import axios from "axios";
import mysql from "serverless-mysql";

const config = mysql({
  config: {
    host: "sql6.freemysqlhosting.net",
    user: "	sql6690801",
    password: "	sql6690801",
    database: "sql6690801",
    port: "3306",
  },
});
export async function POST(req: Request) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
