import mongo from "mongodb";

const { MongoClient } = mongo;

const url = process.env.MONGO_URL;

// create client
export const client = new MongoClient(url, { useNewUrlParser: true });

export const connectDb = async () => {
  try {
    await client.connect();
    await client.db("vishalpc").command({ ping: 1 });
    console.log("DB connection Done");
  } catch (error) {
    console.log(error);
    await client.close();
  }
};
