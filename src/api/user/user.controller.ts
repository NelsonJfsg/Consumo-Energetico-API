import { UserModel } from '../../model/create-user.dto';
//Nest imports
import { Controller, Post, Body, Get } from '@nestjs/common';

//My imports
import { UserEntity } from 'src/database/entity/userEntity';
import { UserService } from './user.service';


@Controller('api/user')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    //Create user
    @Post('/create-user')
    createUser(@Body() user : UserModel){
        return this.userService.createAnUser(user);
    }

    @Post('/user-exists')
    checkUser(@Body() user : UserModel){
        return this.userService.userExists(user);
    }

    @Post('/get-age')
    getAge(@Body() user : UserModel){
        return this.userService.getAge(user);
    }

    @Post('/get-id')
    getId(@Body() user : UserModel){
        return this.userService.getId(user);
    }

    @Get('/get-all-users')
    getAllUsers(){
        return this.userService.getAllUser();
    }

    @Post('/get-name')
    getName(@Body() user : UserModel){
        return this.userService.getName(user);
    }
    //-------TEST
    @Get('/get-min-users')
    getMinUser(){
        return this.userService.getMinUser();
    }

}
