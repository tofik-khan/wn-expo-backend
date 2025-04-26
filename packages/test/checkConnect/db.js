import { connect } from "mongoose";

const dbURI = process.env.DB_URI;

// establishing connection with the MongoDB database

(async () => {
  try {
    await connect(dbURI);
    // if connected successfully logging connected successfully
    console.log("Connected to database");
  } catch (error) {
    // logging the error
    console.log(error.message);
  }
})();
