import { MongoClient } from "mongodb";
// /api.new-meetup
// POST /api.new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://remiachji:9Ki54OMcjCAnU1aF@cluster0-shard-00-00.6uyjt.mongodb.net:27017,cluster0-shard-00-01.6uyjt.mongodb.net:27017,cluster0-shard-00-02.6uyjt.mongodb.net:27017/Meetups?ssl=true&replicaSet=atlas-x2ggnr-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
