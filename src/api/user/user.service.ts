//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

//My imports
import { User, User as userEntity } from 'src/database/entity/user';


@Injectable()
export class UserService {

    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){

    }

    sayHi(){
        console.log('Hi!');
    }

    createAnUser(user : User){
        return this.userEntity.insert(user);
    }


}
