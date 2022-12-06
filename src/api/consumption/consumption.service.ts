//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query, response } from 'express';
import { createQueryBuilder, Double, Repository } from 'typeorm';

//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { UserModel } from 'src/model/create-user.dto';

import { PaymentService } from "./../payment/payment.service";
import { PaymentModel } from 'src/model/paymentModel';

@Injectable()
export class ConsumptionService { 

    constructor(@InjectRepository(ConsumptionEntity) private consumptionEntity : Repository<consumptionModel>){
        
    }

    registConsumption(consumption : consumptionModel){

        this.consumptionEntity.insert(consumption)
        .then((response) => {

            console.log(response);
        });

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
        return this.consumptionEntity.find();
    }

    async getConsumptionByClient(id : number){


        let query = `SELECT * FROM consumption_entity INNER JOIN user_entity ON consumption_entity.idUserId = ${id} AND consumption_entity.idUserId = user_entity.id;`;
        return await this.consumptionEntity.query(query)
        .then(response => console.log(response));
 
    }




}
