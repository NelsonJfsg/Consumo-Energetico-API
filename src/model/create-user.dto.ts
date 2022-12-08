import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate, isInt, IsAlpha, isAlphanumeric, IsNumberString } from "class-validator";

export class UserModel{

    //@IsInt() - si está vacio manda error en la base de datos.
    id : number;

    @IsAlpha()
    name : string;

    @IsEmail()
    email : string;

    @IsNumberString()
    phoneNumber : string;

    @IsString()
    addres : string;

    @IsString()
    birthDay : Date;
}