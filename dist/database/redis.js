"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
let redis = null;
function createRedisConnection() {
    if (redis === null) {
        redis = new Redis({
            port: 6379,
            host: '47.93.97.36',
            db: 10,
            password: "dengpengfei",
        });
    }
    return redis;
}
exports.createRedisConnection = createRedisConnection;
const Constants = {
    NAMESPACE: "Bit.MES",
    MACHINE_ID: this.NAMESPACE + ":machineId",
    WORKPIECE_ID: this.NAMESPACE + ":workpieceId",
    PROCESS_ID: this.NAMESPACE + ":processId"
};
function getMachineId() {
    return redis.incr(Constants.MACHINE_ID);
}
exports.getMachineId = getMachineId;
function getWorkpieceId() {
    return redis.incr(Constants.WORKPIECE_ID);
}
exports.getWorkpieceId = getWorkpieceId;
function getProcessId() {
    return redis.incr(Constants.PROCESS_ID);
}
exports.getProcessId = getProcessId;
//# sourceMappingURL=redis.js.map