import { UserModel } from "./userModel";
import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate, isInt, isString } from "class-validator";

export class consumptionModel{

    //Atributes
    id : number;
    @IsString()
    date : Date;

    @IsNumber()
    consumption : number;

    @IsNumber()
    idUser : number;

}