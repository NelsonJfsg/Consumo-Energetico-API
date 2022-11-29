import { userInfo } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User as userEntity } from "../entity/userEntity";

@Entity()
export class User{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (role) => userEntity) //Foreign
    idUser : number;

    //Columns
    date : Date;
    consumption : number;
   

}