"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./graphql/schema");
const mysql_1 = require("./database/mysql");
const redis_1 = require("./database/redis");
const isDev = true;
async function runApp(port) {
    const app = Express();
    redis_1.createRedisConnection();
    await mysql_1.createMysqlConnection();
    app.use("/graphql", graphqlHTTP({
        schema: await schema_1.default(),
        graphiql: isDev
    }));
    app.listen(port, err => console.log(err || `listen in ${port}`));
}
exports.default = runApp;
//# sourceMappingURL=app.js.map