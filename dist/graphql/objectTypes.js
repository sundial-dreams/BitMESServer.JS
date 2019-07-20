"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const interfaceTypes_1 = require("./interfaceTypes");
let UserType = class UserType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserType.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserType.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserType.prototype, "sex", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], UserType.prototype, "age", void 0);
UserType = __decorate([
    type_graphql_1.ObjectType({ description: "type UserType" })
], UserType);
exports.UserType = UserType;
let MachineType = class MachineType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], MachineType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], MachineType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], MachineType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], MachineType.prototype, "workTime", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], MachineType.prototype, "idleTime", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], MachineType.prototype, "maintainTime", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], MachineType.prototype, "brokenTime", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], MachineType.prototype, "currentState", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], MachineType.prototype, "runAt", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true, defaultValue: 0.0 }),
    __metadata("design:type", Number)
], MachineType.prototype, "cost", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], MachineType.prototype, "chargeOf", void 0);
MachineType = __decorate([
    type_graphql_1.ObjectType({ description: "type MachineType" })
], MachineType);
exports.MachineType = MachineType;
let ErrorType = class ErrorType {
};
ErrorType = __decorate([
    type_graphql_1.ObjectType({
        description: "type ErrorType implements IError",
        implements: [interfaceTypes_1.IError]
    })
], ErrorType);
exports.ErrorType = ErrorType;
let UserResponseType = class UserResponseType {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserResponseType.prototype, "avatar", void 0);
UserResponseType = __decorate([
    type_graphql_1.ObjectType({
        description: "type ErrorType implements IError",
        implements: [interfaceTypes_1.IError]
    })
], UserResponseType);
exports.UserResponseType = UserResponseType;
let MachineResponseType = class MachineResponseType {
};
__decorate([
    type_graphql_1.Field(() => MachineType, { nullable: true }),
    __metadata("design:type", MachineType)
], MachineResponseType.prototype, "machine", void 0);
MachineResponseType = __decorate([
    type_graphql_1.ObjectType({
        description: "type MachineResponseType implements IError",
        implements: [interfaceTypes_1.IError]
    })
], MachineResponseType);
exports.MachineResponseType = MachineResponseType;
let StaffType = class StaffType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], StaffType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "sex", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], StaffType.prototype, "age", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "joinTime", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "workTime", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "position", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", String)
], StaffType.prototype, "salary", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], StaffType.prototype, "description", void 0);
StaffType = __decorate([
    type_graphql_1.ObjectType({
        description: "type StaffType"
    })
], StaffType);
exports.StaffType = StaffType;
let WorkPieceType = class WorkPieceType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], WorkPieceType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], WorkPieceType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], WorkPieceType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], WorkPieceType.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], WorkPieceType.prototype, "processTotalTime", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], WorkPieceType.prototype, "deliveryDate", void 0);
WorkPieceType = __decorate([
    type_graphql_1.ObjectType({
        description: "type WorkPieceType"
    })
], WorkPieceType);
exports.WorkPieceType = WorkPieceType;
let WorkpieceResponseType = class WorkpieceResponseType {
};
__decorate([
    type_graphql_1.Field(() => WorkPieceType),
    __metadata("design:type", WorkPieceType)
], WorkpieceResponseType.prototype, "workpiece", void 0);
WorkpieceResponseType = __decorate([
    type_graphql_1.ObjectType({ description: "type WorkpieceResponseType", implements: [interfaceTypes_1.IError] })
], WorkpieceResponseType);
exports.WorkpieceResponseType = WorkpieceResponseType;
let ProcessType = class ProcessType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], ProcessType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "workpiece", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "machine", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "chargeOf", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], ProcessType.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ProcessType.prototype, "beforeProcess", void 0);
ProcessType = __decorate([
    type_graphql_1.ObjectType({ description: "type ProcessType" })
], ProcessType);
exports.ProcessType = ProcessType;
let ProcessResponseType = class ProcessResponseType {
};
__decorate([
    type_graphql_1.Field(() => ProcessType),
    __metadata("design:type", ProcessType)
], ProcessResponseType.prototype, "process", void 0);
ProcessResponseType = __decorate([
    type_graphql_1.ObjectType({ description: "type ProcessResponseType implements IError", implements: [interfaceTypes_1.IError] })
], ProcessResponseType);
exports.ProcessResponseType = ProcessResponseType;
let ResultType = class ResultType {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ResultType.prototype, "workpiece", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ResultType.prototype, "process", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ResultType.prototype, "machine", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], ResultType.prototype, "startTime", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], ResultType.prototype, "endTime", void 0);
ResultType = __decorate([
    type_graphql_1.ObjectType({ description: "type ResultType" })
], ResultType);
exports.ResultType = ResultType;
let ScheduledResultType = class ScheduledResultType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], ScheduledResultType.prototype, "fulfillTime", void 0);
__decorate([
    type_graphql_1.Field(() => [ResultType]),
    __metadata("design:type", Array)
], ScheduledResultType.prototype, "result", void 0);
ScheduledResultType = __decorate([
    type_graphql_1.ObjectType({ description: "type ScheduledResultType" })
], ScheduledResultType);
exports.ScheduledResultType = ScheduledResultType;
//# sourceMappingURL=objectTypes.js.map