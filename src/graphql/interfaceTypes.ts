import { InterfaceType, Field } from "type-graphql";
import {
    ErrorType,
    UserResponseType,
    MachineResponseType,
    WorkpieceResponseType,
    ProcessResponseType
} from "./objectTypes";

@InterfaceType({
    description: "interface IError",
    resolveType (value) {
        if (Reflect.has(value, "avatar")) return UserResponseType;
        if (Reflect.has(value, "machine")) return MachineResponseType;
        if (Reflect.has(value, "workpiece")) return WorkpieceResponseType;
        if (Reflect.has(value, "process")) return ProcessResponseType;
        return ErrorType;
    }
})
export abstract class IError {
    @Field(() => Boolean) err: boolean;
    @Field(() => String, { nullable: true }) msg?: string;
}

