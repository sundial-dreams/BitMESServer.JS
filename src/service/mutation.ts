import { Arg, Mutation, Resolver } from "type-graphql";
import { IError } from "../graphql/interfaceTypes";
import { getCustomRepository } from "typeorm";
import { MachineRepository, MachineState } from "../model/machine";
import { InputMachine, InputProcess, InputScheduledParameter, InputWorkpiece } from "../graphql/inputTypes";
import {
    MachineResponseType,
    ProcessResponseType,
    ScheduledResultType,
    WorkpieceResponseType
} from "../graphql/objectTypes";
import { getMachineId, getProcessId, getWorkpieceId } from "../database/redis";
import { WorkpieceRepository } from "../model/workpiece";
import { ProcessRepository } from "../model/process";
import { schedule } from "../utils/request";
import { saveScheduleResult } from "../database/mongodb";


@Resolver()
export class MutationResolver {
    private machineRepository = getCustomRepository(MachineRepository);
    private workpieceRepository = getCustomRepository(WorkpieceRepository);
    private processRepository = getCustomRepository(ProcessRepository);

    @Mutation(() => IError)
    async createMachine (@Arg("machine") input: InputMachine): Promise<undefined | IError | MachineResponseType> {
        try {
            let state = <MachineState>input.state;
            delete input.state;
            let id = `#M-${ Date.now() % 10000 }-${ await getMachineId() }`;
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
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async deleteMachine (@Arg("id") id: string): Promise<undefined | IError> {
        try {
            await this.machineRepository.delete(id);
            return {
                err: false
            }
        } catch (e) {
            console.log(e);
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async modifyMachine (@Arg("id") id: string, @Arg("machine") input: InputMachine): Promise<undefined | IError> {
        try {
            let state = <MachineState>input.state;
            delete input.state;
            await this.machineRepository.update(id, {
                ...input,
                currentState: state
            });
            return {
                err: false,
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async createWorkpiece (@Arg("workpiece")  input: InputWorkpiece): Promise<undefined | IError | WorkpieceResponseType> {
        try {
            let id = `#W-${ Date.now() % 10000 }-${ await getWorkpieceId() }`;
            let workpiece = this.workpieceRepository.create({
                id,
                ...input
            });
            await this.workpieceRepository.save(workpiece);
            return {
                err: false,
                workpiece
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async deleteWorkpiece (@Arg("id") id: string): Promise<undefined | IError> {
        try {
            await this.workpieceRepository.delete(id);
            return {
                err: false
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async modifyWorkpiece (@Arg("id") id: string, @Arg("workpiece") input: InputWorkpiece): Promise<undefined | IError> {
        try {
            await this.workpieceRepository.update(id, input);
            return {
                err: false
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async createProcess (@Arg("process") input: InputProcess): Promise<undefined | IError | ProcessResponseType> {
        try {
            let id = `#P-${ Date.now() % 10000 }-${ await getProcessId() }`;
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
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async deleteProcess (@Arg("id") id: string): Promise<undefined | IError> {
        try {
            await this.processRepository.delete(id);
            return {
                err: false
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => IError)
    async modifyProcess (@Arg("id") id: string, @Arg("process") input: InputProcess): Promise<undefined | IError> {
        try {
            await this.processRepository.update(id, input);
            return {
                err: false
            }
        } catch (e) {
            return {
                err: true,
                msg: e.message
            }
        }
    }

    @Mutation(() => ScheduledResultType, { nullable: true })
    async useSchedule (@Arg("param") param: InputScheduledParameter): Promise<undefined | ScheduledResultType> {
        let scheduleResult = await schedule(param.parameter);
        await saveScheduleResult(scheduleResult);
        return scheduleResult;
    }

}

