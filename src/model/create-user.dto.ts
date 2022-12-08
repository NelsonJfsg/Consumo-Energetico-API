import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate, isInt, IsAlpha } from "class-validator";

export class UserModel{

    //@IsInt() - si está vacio manda error en la base de datos.
    id : number;

    @IsString()
    @IsAlpha()
    name : string;

    @IsEmail()
    email : string;

    @IsNumber()
    phoneNumber : string;

    @IsString()
    addres : string;

    @IsString()
    birthDay : Date;
}