import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, IsEmail, isDate, isInt, isEmail, isNumber } from "class-validator";

@Entity()
export class User{

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

    @Column()
    birthDay : Date;

   

}