import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, IsEmail, isDate, isInt, isEmail, isNumber, MinLength } from "class-validator";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()    
    name : string;

    @Column()
    email : string;

    @Column()
    phoneNumber : string;
    
    @Column()
    addres : string;

    @Column({type : "date"})
    birthDay : Date;

}