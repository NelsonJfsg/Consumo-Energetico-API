import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

import { PaymentModel } from "../../model/paymentModel";

@Controller('/api/payment')
export class PaymentController { 

    constructor(private paymentService : PaymentService){

    }

    @Post('/payConsume')
    payAnConsumption(@Body() paymentModel : PaymentModel){
        this.paymentService.payAnConsumption(paymentModel);
    }



}
