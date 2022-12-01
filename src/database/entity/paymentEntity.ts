import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ConsumptionEntity } from './consumptionEntity';
import { UserEntity as userEntity } from "./userEntity";

@Entity()
export class PaymentEntity{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (consumption) => ConsumptionEntity)
    idConsumption : ConsumptionEntity[];
    
    @Column({type : "double"})
    total : number;
    
    @Column()
    paid : boolean;
    

}