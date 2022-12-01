//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Double, Repository } from 'typeorm';

//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { User } from 'src/database/entity/userEntity';
import { consumptionModel } from 'src/model/consumptionModel';

@Injectable()
export class ConsumptionService { 

    constructor(@InjectRepository(ConsumptionEntity) private consumptionEntity : Repository<consumptionModel>){
        
    }

    addConsume(consumption : consumptionModel){

        this.consumptionEntity.insert(consumption)
        .then((response) => {
            console.log(response);
        });

    }

    async getAge(thisId : number) : Promise<ConsumptionEntity>{
        return await this.consumptionEntity.findOneBy({
            id : thisId
        }).then();
    }

    async getTotalConsumeOfClient(){
        this.consumptionEntity.query("SELECT name, birthDay, CURDATE(),TIMESTAMPDIFF(YEAR,birthDay,CURDATE()) AS age FROM user;").then(response => console.log(response));
    }

}
