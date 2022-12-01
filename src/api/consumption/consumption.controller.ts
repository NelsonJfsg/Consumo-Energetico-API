import { Body, Controller, Post } from '@nestjs/common';
import { consumptionModel } from 'src/model/consumptionModel';
import { ConsumptionService } from './consumption.service';

@Controller('api/consumption')
export class ConsumptionController { 

    //Init
    constructor(private consumptionService : ConsumptionService){

    }

    @Post("/regist")
    addConsume(@Body() consumption : consumptionModel){
        this.consumptionService.addConsume(consumption);
    }

    

}
