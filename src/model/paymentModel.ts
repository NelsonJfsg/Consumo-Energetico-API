
import {IsBoolean,IsNumber} from "class-validator";

export interface PaymentModel{

    //Atributes
    id : number;

    idConsumption : number;
    
    total : number;

    paid : boolean;
    

}