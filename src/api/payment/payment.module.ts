import { PaymentService } from './payment.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/database/entity/paymentEntity';
import { PaymentController } from './payment.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentEntity])],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule { }
