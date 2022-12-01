//React
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionEntity } from './entity/consumptionEntity';
import { PaymentEntity } from './entity/paymentEntity';

//My imports.
import { User } from './entity/userEntity';


export const connection = TypeOrmModule.forRoot({

    type : 'mysql',
    host : 'localhost',
    port : 3307,
    username : 'root',
    password : '',
    database : 'energydb',
    entities : [User, ConsumptionEntity, PaymentEntity],
    synchronize : true,

});