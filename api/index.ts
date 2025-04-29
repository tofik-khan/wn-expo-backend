require('dotenv').config()
import cors from "cors";
import express from "express";
import { auth } from "express-oauth2-jwt-bearer";
import { dbTest } from "./db/test";
import {
  createAdmin,
  getAdmins,
  updateAdminImage,
  updateAdminLastLogin,
} from "./db/admin";
import { getSessionsCount } from "./db/session";
import { getPresenterCount } from "./db/presenter";
const app = express();
app.use(express.json());
app.use(cors());

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_BASE_URL,
  tokenSigningAlg: "RS256",
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) =>
  res.send(`Hello ${process.env.VERCEL_TEST} ${new Date().getTime()}`)
);

app.get("/db/test", dbTest);

/** ADMIN */

app.get("/admin", getAdmins);
app.put("/admin/image", updateAdminImage);
app.put("/admin/lastlogin", updateAdminLastLogin);
app.post("/admin", checkJwt, createAdmin);


/** SESSION */

app.get("/sessions/count", getSessionsCount);


/** PRESENTER */
app.get("/presenters/count", getPresenterCount);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;