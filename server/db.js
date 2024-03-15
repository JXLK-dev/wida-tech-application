import mysql from "mysql2/promise";
import express from "express";

MYSQL_HOST: "sql6.freemysqlhosting.net",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "sql6690801",
    MYSQL_USER: "sql6690801",
    MYSQL_PASSWORD: "BqAzB61Sz3",

const config = {
    host: "sql6.freemysqlhosting.net",
    user: "sql6690801",
    password: "BqAzB61Sz3",
    database: "sql6690801",
    port: "3306",
};

app.get("/", async (req, res) => {
    try {
        const dbconnection = await mysql.createConnection(config);
        const [result] = await dbconnection.execute("SELECT * FROM invoice");
        dbconnection.end();
        res.json(result);
    } catch (error) {
        res.json({ error });
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 3000");
});
