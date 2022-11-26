//React
import { TypeOrmModule } from '@nestjs/typeorm';

//My imports.
import { User } from './entity/user';


export const connection = TypeOrmModule.forRoot({

    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : '',
    database : 'energydb',
    entities : [User],
    synchronize : true,

});