"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user");
const machine_1 = require("../model/machine");
const staff_1 = require("../model/staff");
const workpiece_1 = require("../model/workpiece");
const process_1 = require("../model/process");
function createMysqlConnection() {
    return typeorm_1.getConnectionManager().create({
        type: "mysql",
        host: "cdb-3xgx1lpe.cd.tencentcdb.com",
        port: 10005,
        username: "root",
        password: "2031163243abcd",
        database: "Bit.MES",
        connectTimeout: 1000,
        entities: [user_1.User, machine_1.Machine, staff_1.Staff, workpiece_1.Workpiece, process_1.Process]
    }).connect();
}
exports.createMysqlConnection = createMysqlConnection;
//# sourceMappingURL=mysql.js.map