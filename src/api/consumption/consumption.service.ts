import { consumptionModel } from './../../model/consumptionModel';
import { PaymentEntity } from './../../database/entity/paymentEntity';
//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query, response } from 'express';
import { createQueryBuilder, Double, Repository } from 'typeorm';
//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { UserModel } from 'src/model/create-user.dto';
import { PaymentService } from "./../payment/payment.service";
import { PaymentModel } from 'src/model/paymentModel';
import { UserService } from '../user/user.service';


@Injectable()
export class ConsumptionService { 

    constructor(
        @InjectRepository(ConsumptionEntity) private consumptionEntity : Repository<consumptionModel>,
        private userService : UserService ,private paymentService : PaymentService
    ){
        
    }

    async registConsumption(consumption : consumptionModel):Promise<string | boolean>{
        const date = new Date;
        let fecha = new Date((await this.userService.getAge(consumption.idUser)))
        let consumptionValue = consumption.consumption;
        let total =0;

        console.log(consumption.consumption);
        let age 
        
        age = await this.userService.getAge(consumption.idUser).then(response => age = response);

        if(consumptionValue <= 100){
            total =consumptionValue *= 150;
        }else{
            if(consumptionValue >= 101 && consumptionValue <= 300){
                total =consumptionValue *= 170
            }else{
                if(consumptionValue > 300){
                    total =consumptionValue *= 190;
                }
            }
        }

        if(age > 50){
            total =consumptionValue *= 0.90;
        }

        console.log("Consumption value: " + consumptionValue);
        console.log("age: " + age);
        this.consumptionEntity.insert(consumption);
        let paid= false;
        await this.paymentService.create(consumption.id, total, paid);
        return true
        // idconsumption , total y paid 
        
    }




    async getMinMaxConsumption(){
        
        let query = 'SELECT consumption,id,date,idUserId FROM consumption_entity where consumption = (select max(consumption) from consumption_entity);';
        this.consumptionEntity.query(query)
        .then(response => console.log("MAX ",response));
        query = 'SELECT consumption,id,date,idUserId FROM consumption_entity where consumption = (select min(consumption) from consumption_entity);';
        this.consumptionEntity.query(query)
        .then(response => console.log("MIN", response));

    }

    async getAllConsumptions(){
        return this.consumptionEntity.find()
        .then(response => console.log(response));;
    }

    async getConsumptionByClient(id : number){


        let query = `SELECT * FROM consumption_entity INNER JOIN user_entity ON consumption_entity.idUserId = ${id} AND consumption_entity.idUserId = user_entity.id;`;
        return await this.consumptionEntity.query(query);
 
    }
}
