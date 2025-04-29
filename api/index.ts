require('dotenv').config()

import express from "express";
import { dbTest } from "./db/test";
import { getAdmins } from "./db/admin";
import { getSessionsCount } from "./db/session";
import { getPresenterCount } from "./db/presenter";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) =>
  res.send(`Hello ${process.env.VERCEL_TEST} ${new Date().getTime()}`)
);

app.get("/db/test", dbTest);

app.get("/admin", getAdmins);

app.get("/sessions/count", getSessionsCount);

app.get("/presenters/count", getPresenterCount);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;