import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';

import { PaymentModel } from "../../model/paymentModel";
import { ConsumptionController } from '../consumption/consumption.controller';
import { consumptionModel } from 'src/model/consumptionModel';

@Controller('/api/payment')
export class PaymentController { 

    constructor(private paymentService : PaymentService){

    }

    @Put('/payConsume/:id')
    payAnConsumption(@Body()payment:PaymentModel, @Param('id') id){
        this.paymentService.payAnConsumption(id,payment);
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

    @Get('/get-all-payments')
    getAllPayments(){
        return this.paymentService.getAllPayments();
    }
}
