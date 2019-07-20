import { Entity, Column, PrimaryColumn, EntityRepository, Repository } from "typeorm";

export enum UserRole {
    MANAGER = "manager",
    ADMIN = "admin",
    STAFF = "staff"
}

@Entity()
export class User {
    @PrimaryColumn({ type: "varchar", length: 50 }) id: string;
    @Column({ type: "varchar", length: 50 }) email: string;
    @Column({ type: "varchar", length: 50 }) password: string;
    @Column({ type: "varchar", length: 255 }) avatar: string;
    @Column({ type: "enum", enum: UserRole, default: UserRole.ADMIN }) role: string;
    @Column({ type: "varchar", length: 50 }) name: string;
    @Column({ type: "varchar", length: 50 }) sex: string;
    @Column({ type: "int", width: 3 }) age: number;
}

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByEmail (email: string): Promise<User | undefined> {
        return this.findOne({ email });
    }
}