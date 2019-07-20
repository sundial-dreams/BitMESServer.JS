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
const interfaceTypes_1 = require("../graphql/interfaceTypes");
const typeorm_1 = require("typeorm");
const machine_1 = require("../model/machine");
const inputTypes_1 = require("../graphql/inputTypes");
const objectTypes_1 = require("../graphql/objectTypes");
const redis_1 = require("../database/redis");
const workpiece_1 = require("../model/workpiece");
const process_1 = require("../model/process");
const request_1 = require("../utils/request");
let MutationResolver = class MutationResolver {
    constructor() {
        this.machineRepository = typeorm_1.getCustomRepository(machine_1.MachineRepository);
        this.workpieceRepository = typeorm_1.getCustomRepository(workpiece_1.WorkpieceRepository);
        this.processRepository = typeorm_1.getCustomRepository(process_1.ProcessRepository);
    }
    async createMachine(input) {
        try {
            let state = input.state;
            delete input.state;
            let id = `#M-${Date.now() % 10000}-${await redis_1.getMachineId()}`;
            let machine = this.machineRepository.create({
                id,
                runAt: new Date(Date.now()).toLocaleDateString(),
                ...input,
                currentState: state
            });
            await this.machineRepository.save(machine);
            return {
                err: false,
                machine
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async deleteMachine(id) {
        try {
            await this.machineRepository.delete(id);
            return {
                err: false
            };
        }
        catch (e) {
            console.log(e);
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async modifyMachine(id, input) {
        try {
            let state = input.state;
            delete input.state;
            await this.machineRepository.update(id, {
                ...input,
                currentState: state
            });
            return {
                err: false,
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async createWorkpiece(input) {
        try {
            let id = `#W-${Date.now() % 10000}-${await redis_1.getWorkpieceId()}`;
            let workpiece = this.workpieceRepository.create({
                id,
                ...input
            });
            await this.workpieceRepository.save(workpiece);
            return {
                err: false,
                workpiece
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async deleteWorkpiece(id) {
        try {
            await this.workpieceRepository.delete(id);
            return {
                err: false
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async modifyWorkpiece(id, input) {
        try {
            await this.workpieceRepository.update(id, input);
            return {
                err: false
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async createProcess(input) {
        try {
            let id = `#P-${Date.now() % 10000}-${await redis_1.getProcessId()}`;
            console.log(input);
            let process = this.processRepository.create({
                id,
                ...input
            });
            console.log(process);
            await this.processRepository.save(process);
            return {
                err: false,
                process
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async deleteProcess(id) {
        try {
            await this.processRepository.delete(id);
            return {
                err: false
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async modifyProcess(id, input) {
        try {
            await this.processRepository.update(id, input);
            return {
                err: false
            };
        }
        catch (e) {
            return {
                err: true,
                msg: e.message
            };
        }
    }
    async useSchedule(param) {
        return await request_1.schedule(param.parameter);
    }
};
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("machine")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputTypes_1.InputMachine]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "createMachine", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "deleteMachine", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("machine")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputTypes_1.InputMachine]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "modifyMachine", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("workpiece")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputTypes_1.InputWorkpiece]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "createWorkpiece", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "deleteWorkpiece", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("workpiece")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputTypes_1.InputWorkpiece]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "modifyWorkpiece", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("process")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputTypes_1.InputProcess]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "createProcess", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "deleteProcess", null);
__decorate([
    type_graphql_1.Mutation(() => interfaceTypes_1.IError),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("process")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputTypes_1.InputProcess]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "modifyProcess", null);
__decorate([
    type_graphql_1.Mutation(() => objectTypes_1.ScheduledResultType, { nullable: true }),
    __param(0, type_graphql_1.Arg("param")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputTypes_1.InputScheduledParameter]),
    __metadata("design:returntype", Promise)
], MutationResolver.prototype, "useSchedule", null);
MutationResolver = __decorate([
    type_graphql_1.Resolver()
], MutationResolver);
exports.MutationResolver = MutationResolver;
//# sourceMappingURL=mutation.js.map