"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const url = "mongodb://47.93.97.36:27017";
mongodb_1.MongoClient.connect(url).then(client => {
    console.log(client);
    const db = client.db("dengpengfei");
    const collection = db.collection("collection");
    collection.find();
});
//# sourceMappingURL=mongodb.js.map