import { PaymentModule } from './api/payment/payment.module';
import { PaymentController } from './api/payment/payment.controller';
import { ConsumptionModule } from './api/consumption/consumption.module';
import { ConsumptionController } from './api/consumption/consumption.controller';
import { UserModule } from './api/user/user.module';
import { Module } from '@nestjs/common';
import { connection } from './database/dbConfig';

@Module({
  imports: [
    UserModule,
    ConsumptionModule,
    //PaymentModule,
    connection,
  ],
  controllers: [
    //AppController
  ],
  providers: [
    //AppService
  ],
})
export class AppModule { }
