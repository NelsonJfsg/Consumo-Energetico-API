import { UserModel } from "./userModel";
import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate, isInt, isString, IsDateString } from "class-validator";

export class consumptionModel{

    //Atributes
    id : number;

    @IsDateString()
    date : Date;

    @IsNumber()
    consumption : number;

    @IsNumber()
    idUser : number;

}