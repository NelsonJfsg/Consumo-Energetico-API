
import {IsBoolean,IsNumber} from "class-validator";

export class PaymentModel{

    //Atributes
    id : number;

    @IsNumber()
    idConsumption : number;

    @IsNumber()
    total : number;

    @IsBoolean()
    paid : boolean;
    

}