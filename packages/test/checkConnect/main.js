const {MongoClient} = require('mongodb');

exports.main = async () => {
    console.log("...Initiating Cron...");
    const data = await testConnection();
    console.log(data);
    return {"body": "Done!"}
}
  
async function testConnection() {
  const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
      await client.connect();

      return await client
                      .db("wn-expo")
                      .collection('admins')
                      .find({})
                      .toArray(); 
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}
