import { UserModel } from '../../model/create-user.dto';
//Nest imports
import { Controller, Post, Body } from '@nestjs/common';

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
        this.userService.createAnUser(user);
    }

    @Post('/user-exists')
    checkUser(@Body() user : UserModel){
        this.userService.userExists(user);
    }

    @Post('/get-age')
    getAge(@Body() user : UserModel){
        this.userService.getAge(user);
    }

    @Post('/get-id')
    getId(@Body() user : UserModel){
        this.userService.getId(user);
    }
}
