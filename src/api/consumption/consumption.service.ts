//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Double, Repository } from 'typeorm';

//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { UserEntity } from 'src/database/entity/userEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { UserModel } from 'src/model/create-user.dto';

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

    async getConsumptionFromId(thisId : number) : Promise<ConsumptionEntity>{
        return await this.consumptionEntity.findOneBy({
            id : thisId
        }).then();
    }


}
