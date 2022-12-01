//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { consumptionModel } from 'src/model/consumptionModel';

@Injectable()
export class ConsumptionService { 

    constructor(@InjectRepository(ConsumptionEntity) private consumptionEntity : Repository<consumptionModel>){

    }

    addConsume(consumption : consumptionModel){
        return this.consumptionEntity.insert(consumption);
    }


}
