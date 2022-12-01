import { IsInt, IsEmail, IsDate, IsNumber, IsString, isEmail, isNumber, isDate } from "class-validator";
export class CreateUserDto{

    id : number;

    @IsString()
    name : string;

    @IsEmail()
    email : string;

    @IsNumber()
    phoneNumber : string;

    addres : string;

    @IsString()
    birthDay : Date;
}