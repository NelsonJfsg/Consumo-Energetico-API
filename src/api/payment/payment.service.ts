import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { PaymentEntity } from 'src/database/entity/paymentEntity';
import { User } from 'src/database/entity/userEntity';
import { PaymentModel } from 'src/model/paymentModel';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService { 

    constructor(@InjectRepository(PaymentEntity) private paymentModel : Repository<PaymentModel>){

    }

    payAnConsumption(payment : PaymentModel){

        return this.paymentModel.insert(payment);

    }




}
