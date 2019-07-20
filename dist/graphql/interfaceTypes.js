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
const objectTypes_1 = require("./objectTypes");
let IError = class IError {
};
__decorate([
    type_graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], IError.prototype, "err", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], IError.prototype, "msg", void 0);
IError = __decorate([
    type_graphql_1.InterfaceType({
        description: "interface IError",
        resolveType(value) {
            if (Reflect.has(value, "avatar"))
                return objectTypes_1.UserResponseType;
            if (Reflect.has(value, "machine"))
                return objectTypes_1.MachineResponseType;
            if (Reflect.has(value, "workpiece"))
                return objectTypes_1.WorkpieceResponseType;
            if (Reflect.has(value, "process"))
                return objectTypes_1.ProcessResponseType;
            return objectTypes_1.ErrorType;
        }
    })
], IError);
exports.IError = IError;
//# sourceMappingURL=interfaceTypes.js.map