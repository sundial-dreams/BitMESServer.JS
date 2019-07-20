import * as Redis from "ioredis";
import { ScheduleHistory } from "../utils/types";

let redis: Redis.Redis = null;
const defaultConfig = {
    port: 6379,
    host: '47.93.97.36',
    db: 10,
    password: "dengpengfei",
};

export function createRedisConnection (config = defaultConfig): Redis.Redis {
    return !redis ? (redis = new Redis(config)) : redis;
}

const NAMESPACE = "Bit.MES";
const Constants = {
    MACHINE_ID: NAMESPACE + ":machineId",
    WORKPIECE_ID: NAMESPACE + ":workpieceId",
    PROCESS_ID: NAMESPACE + ":processId",
    RESULT_ID: NAMESPACE + ":resultId",
    HISTORY: NAMESPACE + ":history"
};

export function getMachineId (): Promise<number> {
    return redis.incr(Constants.MACHINE_ID)
}

export function getWorkpieceId (): Promise<number> {
    return redis.incr(Constants.WORKPIECE_ID)
}

export function getProcessId (): Promise<number> {
    return redis.incr(Constants.PROCESS_ID);
}

export function getResultId (): Promise<number> {
    return redis.incr(Constants.RESULT_ID);
}

export function saveScheduleResultId (id: string): Promise<0 | 1> {
    return redis.hset(Constants.HISTORY, id, new Date(Date.now()).toLocaleDateString())
}

export function findHistory (): Promise<any> {
    return redis.hgetall(Constants.HISTORY);
}

