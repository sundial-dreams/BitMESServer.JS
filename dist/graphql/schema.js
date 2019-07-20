"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const query_1 = require("../service/query");
const mutation_1 = require("../service/mutation");
exports.default = () => type_graphql_1.buildSchema({ resolvers: [query_1.QueryResolver, mutation_1.MutationResolver] });
//# sourceMappingURL=schema.js.map