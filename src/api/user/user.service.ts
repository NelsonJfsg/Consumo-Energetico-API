//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

//My imports
import { UserEntity, UserEntity as userEntity } from 'src/database/entity/userEntity';
import { UserModel } from 'src/model/create-user.dto';
import { query, response } from 'express';
import { Console } from 'console';
import { isAlpha } from 'class-validator';

@Injectable()
export class UserService {

    //Pending : validate date format in json.

    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){

    }

    //send information to db with user data.
    async createAnUser(user : UserEntity){

        //Validations
        if(true){
            //best code
        }



        //user recolected of db
        let dbUser : UserEntity = await this.userExists(user);
        
        //check if user is null.
        if(dbUser){
            console.log("user exists, please change email.");
        }else{
            console.log("User doesnt exists. You can use this email.");
            return await this.userEntity.insert(user)
            //.then(response => console.log(response.identifiers))
            //.catch(err => console.log(err));
        }

    }

    //Check if the email of user is in db data.
    async userExists(user : UserEntity) : Promise<UserEntity>{

        return await this.userEntity.findOneBy({
            email : user.email
        });
        
    }
    
    async getAge(id : number){

        let age;
        let query : string = `SELECT TIMESTAMPDIFF(YEAR,birthDay,CURDATE()) AS age FROM user_entity WHERE id = '${id}';`;

        console.log(id);
        await this.userEntity.query(query)
        .then(response => {
            const [thisAge] = response;
            age = thisAge.age;

            console.log("Esta es la edad: " + age);
        })
        .catch(err => console.log(err));

        return age;
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

    async getAllUser(){


        return this.userEntity.find({
            select : ['id','email','addres','name','phoneNumber','birthDay'],
        })
        //.then(response => console.log(response));


        /*
        let query = 'SELECT * FROM user_entity';
        this.userEntity.query(query)
        .then(response => console.log(response));
        */

    }

    async getName(user : UserModel) {
        return await this.userEntity.find({
            select : ['id', 'name', 'email', 'addres', 'phoneNumber', 'birthDay']
        });
    }

    //-------test para el min y max 
    
    async getMinUser(){
        
        let query = 'SELECT * FROM user_entity where id = (select max(id) from user_entity);';
        return await this.userEntity.query(query)
        //.then(response => console.log("MAX ",response));
        //query = 'SELECT * FROM user_entity where id = (select min(id) from user_entity);';
        //this.userEntity.query(query)
        //.then(response => console.log("MIN", response));

    }
}
