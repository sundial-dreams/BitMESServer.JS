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
var Position;
(function (Position) {
    Position["NORMAL"] = "normal";
    Position["DEPATMENT_LEADER"] = "department leader";
})(Position = exports.Position || (exports.Position = {}));
let Staff = class Staff {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Staff.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Staff.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "joinTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "workTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "position", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Staff.prototype, "salary", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Staff.prototype, "description", void 0);
Staff = __decorate([
    typeorm_1.Entity()
], Staff);
exports.Staff = Staff;
let StaffRepository = class StaffRepository extends typeorm_1.Repository {
    findBySimilarName(name) {
        return this.find({ name: typeorm_1.Like(`%${name}%`) });
    }
};
StaffRepository = __decorate([
    typeorm_1.EntityRepository(Staff)
], StaffRepository);
exports.StaffRepository = StaffRepository;
//# sourceMappingURL=staff.js.map