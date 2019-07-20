import { Resolver, Query, Arg } from "type-graphql";
import {
    UserType,
    UserResponseType,
    MachineType,
    StaffType,
    WorkPieceType,
    ProcessType,
    ScheduleHistoryType, ScheduledResultType
} from "../graphql/objectTypes";
import { IError } from "../graphql/interfaceTypes";

import { getCustomRepository } from "typeorm";
import { UserRepository, User } from "../model/user";
import { Machine, MachineRepository } from "../model/machine";
import { Staff, StaffRepository } from "../model/staff";
import { Workpiece, WorkpieceRepository } from "../model/workpiece";
import { Process, ProcessRepository } from "../model/process";
import { ScheduleHistory, ScheduleResult } from "../utils/types";
import { findHistory } from "../database/redis";
import { findScheduleResult } from "../database/mongodb";

@Resolver()
export class QueryResolver {
    private userRepository = getCustomRepository(UserRepository);
    private machineRepository = getCustomRepository(MachineRepository);
    private staffRepository = getCustomRepository(StaffRepository);
    private workpieceRepository = getCustomRepository(WorkpieceRepository);
    private processRepository = getCustomRepository(ProcessRepository);

    @Query(() => UserType)
    async queryUser (@Arg("id") id: string): Promise<Array<User> | undefined> {
        return this.userRepository.find();
    }

    @Query(() => IError)
    async verifyEmail (@Arg("email") email: string): Promise<IError | UserResponseType> {
        let user = await this.userRepository.findByEmail(email);
        console.log(user);
        if (user) return {
            err: false,
            msg: null,
            avatar: user.avatar
        };
        return {
            err: true,
            msg: "email was error!"
        }
    }

    @Query(() => IError)
    async verifyPassword (@Arg("email") email: string, @Arg("password") password: string) {
        let user = await this.userRepository.findByEmail(email);
        if (user.password === password) return {
            err: false
        };
        return {
            err: true,
            msg: "password error"
        }
    }

    @Query(() => [MachineType], { nullable: true })
    async queryMachine (@Arg("id", { nullable: true }) id?: string): Promise<undefined | Array<Machine>> {
        return await !!id ? this.machineRepository.find({ id }) : this.machineRepository.find();
    }

    @Query(() => [StaffType], { nullable: true })
    async queryStaffByName (@Arg("name") name: string): Promise<undefined | Staff[]> {
        return await this.staffRepository.findBySimilarName(name);
    }

    @Query(() => [MachineType], { nullable: true })
    async queryMachineByName (@Arg("name") name: string): Promise<undefined | Machine[]> {
        return await this.machineRepository.findBySimilarName(name);
    }

    @Query(() => [WorkPieceType], { nullable: true })
    async queryWorkPieceByName (@Arg("name") name: string): Promise<undefined | Workpiece[]> {
        return await this.workpieceRepository.findBySimilarName(name);
    }

    @Query(() => [WorkPieceType], { nullable: true })
    async queryWorkpiece (@Arg("id", { nullable: true }) id?: string): Promise<undefined | Workpiece[]> {
        return await !!id ? this.workpieceRepository.find({ id }) : this.workpieceRepository.find();
    }

    @Query(() => [ProcessType], { nullable: true })
    async queryProcess (@Arg("id", { nullable: true }) id?: string): Promise<undefined | Process[]> {
        return await !!id ? this.processRepository.find({ id }) : this.processRepository.find();
    }

    @Query(() => [ProcessType], { nullable: true })
    async queryProcessByName (@Arg("name") name: string): Promise<undefined | Process[]> {
        return await this.processRepository.findBySimilarName(name);
    }

    @Query(() => [ScheduleHistoryType], { nullable: true })
    async queryScheduleHistory (): Promise<undefined | ScheduleHistory[]> {
        let history = await findHistory();
        return <ScheduleHistory[]>Object.keys(history).reduce((acc, curKey) => {
            acc.push({ id: curKey, time: history[curKey] });
            return acc
        }, [])
    }

    @Query(() => [ScheduledResultType], { nullable: true })
    async queryScheduleResult (@Arg("id", { nullable: true }) id?: string): Promise<undefined | ScheduleResult[]> {
        let data = await findScheduleResult(id);
        data = Array.isArray(data) ? data.map(v => ({ fulfillTime: v.fulfillTime, result: v.result })) : data;
        return data;
    }
}