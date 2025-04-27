require('dotenv').config()

import express from "express";
import { dbTest } from "./db/test";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => res.send(`Hello ${process.env.VERCEL_TEST} ${new Date().getTime()}`));

app.get('/db/test', dbTest);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;