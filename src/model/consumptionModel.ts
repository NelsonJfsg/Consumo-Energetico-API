import { UserModel } from "./userModel";

export interface consumptionModel{

    //Atributes
    id : number;
    date : Date;
    consumption : number;
    idUser : number;

}