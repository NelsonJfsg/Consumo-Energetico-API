//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

//My imports
import { UserEntity, UserEntity as userEntity } from 'src/database/entity/userEntity';
import { UserModel } from 'src/model/create-user.dto';
import { response } from 'express';

@Injectable()
export class UserService {

    //Pending : validate date format in json.

    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){

    }

    //send information to db with user data.
    async createAnUser(user : UserEntity){

        //user recolected of db
        let dbUser : UserEntity = await this.userExists(user);
        
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
    async userExists(user : UserEntity) : Promise<UserEntity>{

        return await this.userEntity.findOneBy({
            email : user.email
        });
        
    }
    
    async getAge(user : UserModel){

        let id;

        id = await this.getId(user);
        let query : string = `SELECT email, birthDay, CURDATE(),TIMESTAMPDIFF(YEAR,birthDay,CURDATE()) AS age FROM user_entity WHERE id = '${id}';`;

        console.log(id);
        this.userEntity.query(query)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    async getId(user : UserModel) : Promise<number>{

        let id;
        let query = `SELECT id FROM user_entity WHERE email = '${user.email}'`;
        
        await this.userEntity.query(query)
        .then((response => {
            const [thisId] = response;
            id = thisId.id;
        }))
        .catch(err => console.log(err));
        
        return id;

    }
}
