import { PaymentEntity } from './../../database/entity/paymentEntity';
import { PaymentService } from './../payment/payment.service';
import { ConsumptionService } from './consumption.service';
import { ConsumptionController } from './consumption.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionEntity } from "../../database/entity/consumptionEntity";
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/database/entity/userEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ConsumptionEntity, UserEntity,PaymentEntity])],
    controllers: [
        ConsumptionController],
    providers: [
        ConsumptionService, UserService,PaymentService],
})
export class ConsumptionModule { }
