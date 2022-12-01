//Nest imports
import { Body, Controller, Post } from '@nestjs/common';

//My imports
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { User } from 'src/database/entity/userEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { ConsumptionService } from './consumption.service';

@Controller('api/consumption')
export class ConsumptionController { 

    //Init
    constructor(private consumptionService : ConsumptionService){

    }

    //Add Consume
    @Post("/addconsume")
    addConsume(@Body() consumption : consumptionModel){
        this.consumptionService.addConsume(consumption);
    }



}
