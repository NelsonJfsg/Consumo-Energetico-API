import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ConsumptionEntity } from './consumptionEntity';
import { User as userEntity } from "./userEntity";

@Entity()
export class PaymentEntity{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (consumption) => ConsumptionEntity)
    idConsumption : ConsumptionEntity[];
    
    @Column()
    total : number;
    
    @Column()
    paid : number;
    

}