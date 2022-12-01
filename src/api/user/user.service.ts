//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

//My imports
import { User, User as userEntity } from 'src/database/entity/userEntity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){

    }

    async createAnUser(user : User){

        //user recolected of db
        let dbUser : User = await this.userExists(user);
        
        //check if user is null.
        if(dbUser){
            console.log("user exists, please add another email.");
        }else{
            console.log("No existe");
            this.userEntity.insert(user)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        }

    }

    //Check if the email of user is in db data.
    async userExists(user : User) : Promise<User>{

        return await this.userEntity.findOneBy({
            email : user.email
        });
        
    }
}
