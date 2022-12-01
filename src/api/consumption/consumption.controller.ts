import { Body, Controller, Post } from '@nestjs/common';
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { User } from 'src/database/entity/userEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { ConsumptionService } from './consumption.service';

@Controller('api/consumption')
export class ConsumptionController { 

    constructor(private consumptionService : ConsumptionService){

    }

    @Post("/addconsume")
    addConsume(@Body() consumption : consumptionModel){
        this.consumptionService.addConsume(consumption);
    }



}
