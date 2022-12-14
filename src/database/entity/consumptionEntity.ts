import { userInfo } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity as userEntity } from "./userEntity";

@Entity()
export class ConsumptionEntity{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (user) => userEntity) //Foreign
    idUser : userEntity[];

    //Columns
    @Column({type : "date"})
    date : string;

    @Column({type : "double"})
    consumption : number;
   

}