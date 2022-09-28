import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class User {
    save() {
      throw new Error("Method not implemented.");
    }
    constructor(user: Partial<User>) {
        super()
        Object.assign(this, user);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

}
