import { Body, Controller, Post, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';

import { PaymentModel } from "../../model/paymentModel";
import { ConsumptionController } from '../consumption/consumption.controller';
import { consumptionModel } from 'src/model/consumptionModel';

@Controller('/api/payment')
export class PaymentController { 

    constructor(private paymentService : PaymentService){

    }

    @Post('/payConsume')
    payAnConsumption(@Body() paymentModel : PaymentModel){
        //this.paymentService.payAnConsumption(paymentModel);
    }

    @Get('/get-paids')
    getAllPaids(){
        return this.paymentService.getAllPaids();
    }

    @Get('/get-NoPaids')
    getAllNoPaids(){
        return this.paymentService.getAllNoPaids();
    }

    @Post('/test')
    getConsumptionById(@Body() consumption : consumptionModel){
        //return this.paymentService.payAnConsumption(consumption,);
    }

}
