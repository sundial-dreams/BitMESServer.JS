import { Entity, Column, PrimaryColumn, EntityRepository, Repository, Like } from "typeorm";

@Entity()
export class Process {
    @PrimaryColumn({ type: "varchar", length: 20 }) id: string;
    @Column({ type: "varchar", length: 50 }) name: string;
    @Column({ type: "varchar", length: 500 }) description: string;
    @Column({ type: "varchar", length: 30 }) workpiece: string;
    @Column({ type: "varchar", length: 30 }) machine: string;
    @Column({ type: "varchar", length: 30 }) chargeOf: string;
    @Column({ type: "decimal", width: 10 }) time: number;
    @Column({ type: "varchar", length: 20 }) beforeProcess: string;
}

@EntityRepository(Process)
export class ProcessRepository extends Repository<Process> {
    findBySimilarName (name: string): Promise<undefined | Process[]> {
        return this.find({ name: Like(`%${ name }%`) });
    }
}