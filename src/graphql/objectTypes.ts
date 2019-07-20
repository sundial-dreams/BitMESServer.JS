import { ObjectType, Field, Int, ID, Float } from "type-graphql";
import { IError } from "./interfaceTypes";
import { Workpiece } from "../model/workpiece";

@ObjectType({ description: "type UserType" })
export class UserType {
    @Field(() => ID) id: string;
    @Field(() => String) email: string;
    @Field(() => String) avatar: string;
    @Field(() => String) role: string;
    @Field(() => String) name: string;
    @Field(() => String) sex: string;
    @Field(() => Int) age: number;
}

@ObjectType({ description: "type MachineType" })
export class MachineType {
    @Field(() => ID) id: string;
    @Field(() => String) name: string;
    @Field(() => String, { nullable: true }) description: string;
    @Field(() => Float, { nullable: true, defaultValue: 0 }) workTime: number;
    @Field(() => Float, { nullable: true, defaultValue: 0 }) idleTime: number;
    @Field(() => Float, { nullable: true, defaultValue: 0 }) maintainTime: number;
    @Field(() => Float, { nullable: true, defaultValue: 0 }) brokenTime: number;
    @Field(() => String) currentState: string;
    @Field(() => String) runAt: string;
    @Field(() => Float, { nullable: true, defaultValue: 0.0 }) cost: number;
    @Field(() => String) chargeOf: string;
}

@ObjectType({
    description: "type ErrorType implements IError",
    implements: [IError]
})
export class ErrorType implements IError {
    err: boolean;
    msg: string;
}

@ObjectType({
    description: "type ErrorType implements IError",
    implements: [IError]
})
export class UserResponseType implements IError {
    err: boolean;
    msg: string;
    @Field(() => String, { nullable: true }) avatar: string;
}

@ObjectType({
    description: "type MachineResponseType implements IError",
    implements: [IError]
})
export class MachineResponseType implements IError {
    err: boolean;
    msg: string;
    @Field(() => MachineType, { nullable: true }) machine: MachineType;
}

@ObjectType({
    description: "type StaffType"
})
export class StaffType {
    @Field(() => ID) id: string;
    @Field(() => String) name: string;
    @Field(() => String) sex: string;
    @Field(() => Int) age: number;
    @Field(() => String) joinTime: string;
    @Field(() => String) workTime: string;
    @Field(() => String) position: string;
    @Field(() => Float) salary: string;
    @Field(() => String) description: string;
}

@ObjectType({
    description: "type WorkPieceType"
})
export class WorkPieceType {
    @Field(() => ID) id: string;
    @Field(() => String) name: string;
    @Field(() => String, { nullable: true }) description: string;
    @Field(() => Float) price: number;
    @Field(() => Float) processTotalTime: number;
    @Field(() => String) deliveryDate: string;
}

@ObjectType({ description: "type WorkpieceResponseType", implements: [IError] })
export class WorkpieceResponseType implements IError {
    err: boolean;
    msg: string;
    @Field(() => WorkPieceType) workpiece: WorkPieceType
}

@ObjectType({ description: "type ProcessType" })
export class ProcessType {
    @Field(() => ID) id: string;
    @Field(() => String) name: string;
    @Field(() => String) description: string;
    @Field(() => String) workpiece: string;
    @Field(() => String) machine: string;
    @Field(() => String) chargeOf: string;
    @Field(() => Float) time: number;
    @Field(() => String) beforeProcess: string;
}

@ObjectType({ description: "type ProcessResponseType implements IError", implements: [IError] })
export class ProcessResponseType implements IError {
    err: boolean;
    msg: string;
    @Field(() => ProcessType) process: ProcessType
}



@ObjectType({description: "type ResultType"})
export class ResultType {
    @Field(() => String) workpiece: string;
    @Field(() => String) process: string;
    @Field(() => String) machine: string;
    @Field(() => Float) startTime: number;
    @Field(() => Float) endTime: number;
}

@ObjectType({ description: "type ScheduledResultType" })
export class ScheduledResultType {
    @Field(() => Float) fulfillTime: number;
    @Field(() => [ResultType]) result: Array<ResultType>
}

@ObjectType({description: "type ScheduleHistoryType"})
export class ScheduleHistoryType {
    @Field(() => ID) id: string;
    @Field(() => String) time: string;
}
