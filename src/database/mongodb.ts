import { MongoClient } from "mongodb";
import { getResultId, saveScheduleResultId } from "./redis";
import { ScheduleResult } from "../utils/types";

const defaultUrl = "mongodb://47.93.97.36:27017";
export const DB_NAME = "BitMES";
export const Collections = {
    scheduleResult: "scheduleResult"
};
let mongo: MongoClient = null;

export async function createMongoConnection (url = defaultUrl): Promise<MongoClient> {
    return !mongo ? mongo = await MongoClient.connect(url, { useNewUrlParser: true }) : mongo;
}

export async function saveScheduleResult (result: ScheduleResult): Promise<string | undefined> {
    try {
        let database = mongo.db(DB_NAME);
        let collection = database.collection(Collections.scheduleResult);
        let id = `#R-${ Date.now() % 10000 }-${ await getResultId() }`;
        await collection.insertMany([{ id, ...result }]);
        await saveScheduleResultId(id);
        return id
    } catch (e) {
        console.error(e)
    }
}

export async function findScheduleResult (id?: string): Promise<undefined | ScheduleResult[]> {
    let database = mongo.db(DB_NAME);
    let collection = database.collection(Collections.scheduleResult);
    return await !id ? collection.find().toArray() : collection.find({ id }).toArray();
}



