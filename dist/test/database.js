"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../database/mysql");
const machine_1 = require("../model/machine");
const typeorm_1 = require("typeorm");
async function main() {
    await mysql_1.createMysqlConnection();
    let machineRepository = typeorm_1.getCustomRepository(machine_1.MachineRepository);
    let input = {
        id: "ddddbb",
        description: "ff",
        currentState: "idle",
        name: "b3",
        chargeOf: "staff01",
        runAt: new Date(Date.now()).toLocaleDateString()
    };
    let machine = machineRepository.create({
        ...input
    });
    await machineRepository.save(machine);
    console.log(await machineRepository.find());
}
main().catch(console.error);
//# sourceMappingURL=database.js.map