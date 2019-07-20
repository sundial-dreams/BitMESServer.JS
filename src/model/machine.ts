import { Entity, Column, PrimaryColumn, EntityRepository, Repository, Like } from "typeorm";

export enum MachineState {
    IDLE = "idle",
    WORK = "work",
    MAINTAIN = "maintain",
    BROKEN = "broken",
}

@Entity()
export class Machine {
    @PrimaryColumn({ type: "varchar", length: 30 }) id: string;
    @Column({ type: "varchar", length: 30 }) name: string;
    @Column({ type: "varchar", length: 500 }) description: string;
    @Column({ type: "decimal", width: 10, default: 0 }) workTime: number;
    @Column({ type: "decimal", width: 10, default: 0 }) idleTime: number;
    @Column({ type: "decimal", width: 10, default: 0 }) maintainTime: number;
    @Column({ type: "decimal", width: 10, default: 0 }) brokenTime: number;
    @Column({ type: "enum", enum: MachineState, default: MachineState.IDLE }) currentState: MachineState;
    @Column({ type: "varchar", length: 20 }) runAt: string;
    @Column({ type: "decimal", width: 10, scale: 2, default: 0 }) cost: number;
    @Column({ type: "varchar", length: 30 }) chargeOf: string;
}

@EntityRepository(Machine)
export class MachineRepository extends Repository<Machine> {
    findBySimilarName(name: string): Promise<undefined | Machine[]> {
        return this.find({name: Like(`%${name}%`)})
    }
}
