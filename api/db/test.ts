require("dotenv").config();
import { MongoClient } from "mongodb";

console.log("Connecting to DB");
const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/`
);

export const dbTest = async (req, res) => {
  console.log("Fetching Data");

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    const admins = await client
      .db("wn-expo")
      .collection("admins")
      .find({})
      .toArray();
    res.send(JSON.stringify(admins));
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
};
