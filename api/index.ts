require('dotenv').config()
const cors = require("cors");


import express from "express";
import { dbTest } from "./db/test";
import { getAdmins, updateAdminImage, updateAdminLastLogin } from "./db/admin";
import { getSessionsCount } from "./db/session";
import { getPresenterCount } from "./db/presenter";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) =>
  res.send(`Hello ${process.env.VERCEL_TEST} ${new Date().getTime()}`)
);

app.get("/db/test", dbTest);

/** ADMIN */

app.get("/admin", getAdmins);
app.put("/admin/image", updateAdminImage);
app.put("/admin/lastlogin", updateAdminLastLogin);


/** SESSION */

app.get("/sessions/count", getSessionsCount);


/** PRESENTER */
app.get("/presenters/count", getPresenterCount);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;