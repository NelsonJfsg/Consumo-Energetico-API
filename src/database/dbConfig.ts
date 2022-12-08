//React
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionEntity } from './entity/consumptionEntity';
import { PaymentEntity } from './entity/paymentEntity';

//My imports.
import { UserEntity } from './entity/userEntity';


export const connection = TypeOrmModule.forRoot({

    //type : 'mysql',
    //host : process.env.DB_HOST,
    //port : Number(process.env.DB_PORT),
    //username : process.env.DB_USER,
    //password : process.env.DB_PASSWORD,
    //database : process.env.DB_NAME,
    //entities : [UserEntity, ConsumptionEntity, PaymentEntity],
    //synchronize : true,


    type : 'mysql',
    host : 'localhost',
    port : 3307,
    username : 'root',
    password : '',
    database : 'energydb',
    entities : [UserEntity, ConsumptionEntity, PaymentEntity],
    synchronize : true,

});