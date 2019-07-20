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
let Process = class Process {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Process.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Process.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 500 }),
    __metadata("design:type", String)
], Process.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Process.prototype, "workpiece", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Process.prototype, "machine", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Process.prototype, "chargeOf", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", width: 10 }),
    __metadata("design:type", Number)
], Process.prototype, "time", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Process.prototype, "beforeProcess", void 0);
Process = __decorate([
    typeorm_1.Entity()
], Process);
exports.Process = Process;
let ProcessRepository = class ProcessRepository extends typeorm_1.Repository {
    findBySimilarName(name) {
        return this.find({ name: typeorm_1.Like(`%${name}%`) });
    }
};
ProcessRepository = __decorate([
    typeorm_1.EntityRepository(Process)
], ProcessRepository);
exports.ProcessRepository = ProcessRepository;
//# sourceMappingURL=process.js.map