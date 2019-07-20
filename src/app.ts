import * as Express from "express";
import * as graphqlHTTP from "express-graphql";
import buildSchema from "./graphql/schema";
import { createMysqlConnection } from "./database/mysql";
import { createRedisConnection } from "./database/redis";
import { createMongoConnection } from "./database/mongodb";

const isDev = true;

export default async function runApp (port) {
    const app = Express();
    createRedisConnection();
    await createMongoConnection();
    await createMysqlConnection();
    app.use("/graphql", graphqlHTTP({
        schema: await buildSchema(),
        graphiql: isDev
    }));
    app.listen(port, err => console.log(err || `listen in ${ port }`));
}
