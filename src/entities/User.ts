import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class User {
    constructor(user: Partial<User>) {
        super()
        Object.assign(this, user);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

}
