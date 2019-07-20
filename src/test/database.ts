import { createMysqlConnection } from "../database/mysql";
import { MachineState, MachineRepository, Machine } from "../model/machine";
import { getCustomRepository } from "typeorm";

async function main() {
    await createMysqlConnection();
    let machineRepository = getCustomRepository(MachineRepository);

    let input = {
        id: "ddddbb",
        description: "ff",
        currentState: <MachineState> "idle",
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