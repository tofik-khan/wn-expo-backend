require("dotenv").config();
import { MongoClient } from "mongodb";

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/`
);

export const getSessionsCount = async (req, res) => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    const admins = await client
      .db("wn-expo")
      .collection("sessions")
      .countDocuments({published: true})
    res.send({status: "success", data: admins})
  } catch (e) {
    console.error(e);
    res.status(500).send({status: "error", message: e.message})
  } finally {
    await client.close();
  }
}
