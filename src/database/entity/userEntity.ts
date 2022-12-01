import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, IsEmail, isDate, isInt, isEmail, isNumber, MinLength } from "class-validator";

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
    @MinLength(2)
    addres : string;

    @Column()
    birthDay : Date;

   

}