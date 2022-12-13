import { UserEntity } from './../../database/entity/userEntity';
import { ConsumptionEntity } from './../../database/entity/consumptionEntity';
import { UserService } from './../user/user.service';
import { ConsumptionService } from './../consumption/consumption.service';
import { PaymentService } from './payment.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/database/entity/paymentEntity';
import { PaymentController } from './payment.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentEntity, ConsumptionEntity, UserEntity])],
    controllers: [PaymentController],
    providers: [PaymentService,ConsumptionService,UserService],
})
export class PaymentModule { }
