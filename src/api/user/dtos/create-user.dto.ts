import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate } from "class-validator";
export class CreateUserDto{
    @IsNumber()
    id : number;

    @IsString()
    name : string;

    @IsEmail()
    email : string;

    @IsNumber()
    phoneNumber : string;

    addres : string;

    @IsDate()
    birthDay : Date;
}