import { Entity, Column, PrimaryColumn, EntityRepository, Repository, Like } from "typeorm";

@Entity()
export class Workpiece {
    @PrimaryColumn({ type: "varchar", length: 30 }) id: string;
    @Column({ type: "varchar", length: 30 }) name: string;
    @Column({ type: "varchar", length: 500, nullable: true }) description?: string;
    @Column({ type: "decimal", width: 10, scale: 2 }) price: number;
    @Column({ type: "decimal", width: 10, scale: 2 }) processTotalTime: number;
    @Column({ type: "varchar", length: 20 }) deliveryDate: string;
}

@EntityRepository(Workpiece)
export class WorkpieceRepository extends Repository<Workpiece> {
    findBySimilarName (name: String): Promise<undefined | Workpiece[]> {
        return this.find({ name: Like(`%${ name }%`) })
    }
}