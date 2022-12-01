//Nest imports
import { Controller, Post, Body } from '@nestjs/common';

//My imports
import { User } from 'src/database/entity/userEntity';
import { UserService } from './user.service';

//Lets code.
@Controller('api/user')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    //Create user
    @Post('/create-user')
    createUser(@Body() user : User){
        this.userService.createAnUser(user);
    }

    @Post('/user-exists')
    checkUser(@Body() user : User){
        this.userService.userExists(user);
    }

}
