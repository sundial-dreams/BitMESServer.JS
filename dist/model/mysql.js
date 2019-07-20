"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const machine_1 = require("./machine");
function createMysqlConnection() {
    return typeorm_1.getConnectionManager().create({
        type: "mysql",
        host: "cdb-3xgx1lpe.cd.tencentcdb.com",
        port: 10005,
        username: "root",
        password: "2031163243abcd",
        database: "Bit.MES",
        connectTimeout: 1000,
        entities: [user_1.User, machine_1.Machine]
    }).connect();
}
exports.createMysqlConnection = createMysqlConnection;
//# sourceMappingURL=mysql.js.map