import { ConsumptionModule } from './api/consumption/consumption.module';
import { ConsumptionController } from './api/consumption/consumption.controller';
import { UserModule } from './api/user/user.module';
import { Module } from '@nestjs/common';
import { connection } from './database/dbConfig';

@Module({
  imports: [
    ConsumptionModule,
    UserModule,
    ConsumptionModule,
    connection,
  ],
  controllers: [
    ConsumptionController,
    //AppController
  ],
  providers: [
    //AppService
  ],
})
export class AppModule { }
