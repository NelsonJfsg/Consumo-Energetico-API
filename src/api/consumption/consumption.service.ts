import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { Repository } from 'typeorm';

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

}
