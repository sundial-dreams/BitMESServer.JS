import { Entity, Column, PrimaryColumn, EntityRepository, Repository, Like } from "typeorm";

export enum Position {
    NORMAL = "normal",
    DEPATMENT_LEADER = "department leader"
}

@Entity()
export class Staff {
    @PrimaryColumn() id: string;
    @Column() name: string;
    @Column() sex: string;
    @Column() age: number;
    @Column() joinTime: string;
    @Column() workTime: string;
    @Column() position: Position;
    @Column() salary: number;
    @Column() description: string;
}

@EntityRepository(Staff)
export class StaffRepository extends Repository<Staff> {
    findBySimilarName (name: string): Promise<undefined | Staff[]> {
        return this.find({ name: Like(`%${ name }%`) })
    }
}