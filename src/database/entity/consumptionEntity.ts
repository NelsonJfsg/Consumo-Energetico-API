import { userInfo } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User as userEntity } from "./userEntity";

@Entity()
export class ConsumptionEntity{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (role) => userEntity) //Foreign
    idUser : number;

    //Columns
    @Column()
    date : Date;

    @Column()
    consumption : number;
   

}