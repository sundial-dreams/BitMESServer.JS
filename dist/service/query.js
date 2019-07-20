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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const objectTypes_1 = require("../graphql/objectTypes");
const interfaceTypes_1 = require("../graphql/interfaceTypes");
const typeorm_1 = require("typeorm");
const user_1 = require("../model/user");
const machine_1 = require("../model/machine");
const staff_1 = require("../model/staff");
const workpiece_1 = require("../model/workpiece");
const process_1 = require("../model/process");
let QueryResolver = class QueryResolver {
    constructor() {
        this.userRepository = typeorm_1.getCustomRepository(user_1.UserRepository);
        this.machineRepository = typeorm_1.getCustomRepository(machine_1.MachineRepository);
        this.staffRepository = typeorm_1.getCustomRepository(staff_1.StaffRepository);
        this.workpieceRepository = typeorm_1.getCustomRepository(workpiece_1.WorkpieceRepository);
        this.processRepository = typeorm_1.getCustomRepository(process_1.ProcessRepository);
    }
    async queryUser(id) {
        return this.userRepository.find();
    }
    async verifyEmail(email) {
        let user = await this.userRepository.findByEmail(email);
        console.log(user);
        if (user)
            return {
                err: false,
                msg: null,
                avatar: user.avatar
            };
        return {
            err: true,
            msg: "email was error!"
        };
    }
    async verifyPassword(email, password) {
        let user = await this.userRepository.findByEmail(email);
        if (user.password === password)
            return {
                err: false
            };
        return {
            err: true,
            msg: "password error"
        };
    }
    async queryMachine(id) {
        return await !!id ? this.machineRepository.find({ id }) : this.machineRepository.find();
    }
    async queryStaffByName(name) {
        return await this.staffRepository.findBySimilarName(name);
    }
    async queryMachineByName(name) {
        return await this.machineRepository.findBySimilarName(name);
    }
    async queryWorkPieceByName(name) {
        return await this.workpieceRepository.findBySimilarName(name);
    }
    async queryWorkpiece(id) {
        return await !!id ? this.workpieceRepository.find({ id }) : this.workpieceRepository.find();
    }
    async queryProcess(id) {
        return await !!id ? this.processRepository.find({ id }) : this.processRepository.find();
    }
    async queryProcessByName(name) {
        return await this.processRepository.findBySimilarName(name);
    }
};
__decorate([
    type_graphql_1.Query(() => objectTypes_1.UserType),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryUser", null);
__decorate([
    type_graphql_1.Query(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "verifyEmail", null);
__decorate([
    type_graphql_1.Query(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("email")), __param(1, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "verifyPassword", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.MachineType], { nullable: true }),
    __param(0, type_graphql_1.Arg("id", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryMachine", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.StaffType], { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryStaffByName", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.MachineType], { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryMachineByName", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.WorkPieceType], { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryWorkPieceByName", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.WorkPieceType], { nullable: true }),
    __param(0, type_graphql_1.Arg("id", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryWorkpiece", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.ProcessType], { nullable: true }),
    __param(0, type_graphql_1.Arg("id", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryProcess", null);
__decorate([
    type_graphql_1.Query(() => [objectTypes_1.ProcessType], { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueryResolver.prototype, "queryProcessByName", null);
QueryResolver = __decorate([
    type_graphql_1.Resolver()
], QueryResolver);
exports.QueryResolver = QueryResolver;
//# sourceMappingURL=query.js.map