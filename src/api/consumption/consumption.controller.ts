//Nest imports
import { Body, Controller, Post,Get } from '@nestjs/common';
import { consumptionModel } from 'src/model/consumptionModel';
import { UserModel } from 'src/model/create-user.dto';
import { ConsumptionService } from './consumption.service';

@Controller('api/consumption')
export class ConsumptionController { 

    //Init
    constructor(private consumptionService : ConsumptionService){

    }


    @Post("/regist-consumption")
    addConsume(@Body() consumption : consumptionModel){
        this.consumptionService.registConsumption(consumption);
    }

    @Get('/get-max-min-consumption')
    getMinMaxConsumption(){
        return this.consumptionService.getMinMaxConsumption();
    }

    @Get('/get-all-consumptions')
    getAllConsumptions(){
        return this.consumptionService.getAllConsumptions();
    }

    @Post('/get-consumptions-by-client')
    getConsumptionByClient(@Body() user: UserModel){
        return this.consumptionService.getConsumptionByClient(user.id);
    }
    
}
