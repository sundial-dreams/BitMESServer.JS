import { buildSchema } from "type-graphql";
import { QueryResolver } from "../service/query";
import { MutationResolver } from "../service/mutation";

export default () => buildSchema({ resolvers: [QueryResolver, MutationResolver] });

