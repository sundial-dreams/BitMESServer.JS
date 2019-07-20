import { MongoClient } from "mongodb";

const defaultUrl = "mongodb://47.93.97.36:27017";
export const DB_NAME = "TEST";
let mongo: MongoClient = null;

export async function connectMongoDB (url = defaultUrl): Promise<MongoClient> {
    return mongo = await MongoClient.connect(url)
}

export async function saveResult (result) {
    await connectMongoDB();
    let database = mongo.db(DB_NAME);
    let collection = database.collection("scheduleResult");
    await collection.insertMany([{
        id: "undefined",
        fulfillTime: 11,
        result: [{ workpiece: "aa", process: "aa", machine: "aa", startTime: 1, endTime: 2 }]
    }]);
    let r = await collection.find({ id: "undefined" }).toArray();
    console.log(r);
}
saveResult("ff").catch();