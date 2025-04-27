require("dotenv").config();
import { MongoClient } from "mongodb";

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/`
);

export const dbTest = async (req, res) => {
  const admins = await client
    .db("wn-expo")
    .collection("admins")
    .find({})
    .toArray();
  res.send(JSON.stringify(admins));
};
