import * as Redis from "ioredis";
const redis = new Redis({
    port: 6379,
    host: '47.93.97.36',
    db: 0,
    password: "dengpengfei",
});
redis.set("name", "dpf").then(res => {
    console.log(res);
    redis.get("name").then(res => {
        console.log(res);
    })
});