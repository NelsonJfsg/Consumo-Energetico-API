import { UserModule } from './api/user/user.module';
import { Module } from '@nestjs/common';
import { connection } from './database/dbConfig';

@Module({
  imports: [
    UserModule,
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
