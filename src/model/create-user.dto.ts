import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate, isInt } from "class-validator";

export class CreateUserDto{

    //@IsInt() - si está vacio manda error en la base de datos.
    id : number;

    @IsString()
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