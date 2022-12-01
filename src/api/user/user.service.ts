//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

//My imports
import { User, User as userEntity } from 'src/database/entity/userEntity';

@Injectable()
export class UserService {

    //Pending : validate date format in json.

    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){

    }

    //send information to db with user data.
    async createAnUser(user : User){

        //user recolected of db
        let dbUser : User = await this.userExists(user);
        
        //check if user is null.
        if(dbUser){
            console.log("user exists, please change email.");
        }else{
            console.log("User doesnt exists. You can use this email.");
            this.userEntity.insert(user)
            .then(response => console.log(response.identifiers))
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
