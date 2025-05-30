require("dotenv").config();
import { MongoClient } from "mongodb";

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/`
);

export const dbTest = async (req, res) => {
  console.log("Fetching Data");

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    const collections = await client.db("wn-expo").listCollections().toArray();
    res.send({ status: "success", data: collections });
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
};
