import { getConnectionManager, Connection } from "typeorm";
import { User } from "../model/user";
import { Machine } from "../model/machine";
import { Staff } from "../model/staff";
import { Workpiece } from "../model/workpiece";
import { Process } from "../model/process";

export function createMysqlConnection (): Promise<Connection> {
    return getConnectionManager().create({
        type: "mysql",
        host: "cdb-3xgx1lpe.cd.tencentcdb.com",
        port: 10005,
        username: "root",
        password: "2031163243abcd",
        database: "Bit.MES",
        connectTimeout: 1000,
        entities: [User, Machine, Staff, Workpiece, Process]
    }).connect();
}
