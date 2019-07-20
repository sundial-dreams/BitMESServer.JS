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
const typeorm_1 = require("typeorm");
var MachineState;
(function (MachineState) {
    MachineState["IDLE"] = "idle";
    MachineState["WORK"] = "work";
    MachineState["MAINTAIN"] = "maintain";
    MachineState["BROKEN"] = "broken";
})(MachineState = exports.MachineState || (exports.MachineState = {}));
let Machine = class Machine {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Machine.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Machine.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 500 }),
    __metadata("design:type", String)
], Machine.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10, default: 0 }),
    __metadata("design:type", Number)
], Machine.prototype, "workTime", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10, default: 0 }),
    __metadata("design:type", Number)
], Machine.prototype, "idleTime", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10, default: 0 }),
    __metadata("design:type", Number)
], Machine.prototype, "maintainTime", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10, default: 0 }),
    __metadata("design:type", Number)
], Machine.prototype, "brokenTime", void 0);
__decorate([
    typeorm_1.Column({ type: "enum", enum: MachineState, default: MachineState.IDLE }),
    __metadata("design:type", String)
], Machine.prototype, "currentState", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Machine.prototype, "runAt", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Machine.prototype, "cost", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Machine.prototype, "chargeOf", void 0);
Machine = __decorate([
    typeorm_1.Entity()
], Machine);
exports.Machine = Machine;
let MachineRepository = class MachineRepository extends typeorm_1.Repository {
    findBySimilarName(name) {
        return this.find({ name: typeorm_1.Like(`%${name}%`) });
    }
};
MachineRepository = __decorate([
    typeorm_1.EntityRepository(Machine)
], MachineRepository);
exports.MachineRepository = MachineRepository;
//# sourceMappingURL=machine.js.map