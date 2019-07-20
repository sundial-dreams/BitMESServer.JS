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
let InputMachine = class InputMachine {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputMachine.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputMachine.prototype, "state", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputMachine.prototype, "chargeOf", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputMachine.prototype, "description", void 0);
InputMachine = __decorate([
    type_graphql_1.InputType({ description: "input InputMachine" })
], InputMachine);
exports.InputMachine = InputMachine;
let InputWorkpiece = class InputWorkpiece {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputWorkpiece.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputWorkpiece.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], InputWorkpiece.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], InputWorkpiece.prototype, "processTotalTime", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputWorkpiece.prototype, "deliveryDate", void 0);
InputWorkpiece = __decorate([
    type_graphql_1.InputType({ description: "input InputWorkpiece" })
], InputWorkpiece);
exports.InputWorkpiece = InputWorkpiece;
let InputProcess = class InputProcess {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "workpiece", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "machine", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "chargeOf", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], InputProcess.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], InputProcess.prototype, "beforeProcess", void 0);
InputProcess = __decorate([
    type_graphql_1.InputType({ description: "input InputProcess" })
], InputProcess);
exports.InputProcess = InputProcess;
let ScheduledParameter = class ScheduledParameter {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ScheduledParameter.prototype, "workpiece", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ScheduledParameter.prototype, "process", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ScheduledParameter.prototype, "machine", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], ScheduledParameter.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ScheduledParameter.prototype, "order", void 0);
ScheduledParameter = __decorate([
    type_graphql_1.InputType({ description: "input ScheduledParameter" })
], ScheduledParameter);
exports.ScheduledParameter = ScheduledParameter;
let InputScheduledParameter = class InputScheduledParameter {
};
__decorate([
    type_graphql_1.Field(() => [ScheduledParameter]),
    __metadata("design:type", Array)
], InputScheduledParameter.prototype, "parameter", void 0);
InputScheduledParameter = __decorate([
    type_graphql_1.InputType({ description: "input InputScheduledParameter" })
], InputScheduledParameter);
exports.InputScheduledParameter = InputScheduledParameter;
//# sourceMappingURL=inputTypes.js.map