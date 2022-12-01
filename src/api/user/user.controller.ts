import { CreateUserDto } from './dtos/create-user.dto';
//Nest imports
import { Controller, Post, Body } from '@nestjs/common';

//My imports
import { User } from 'src/database/entity/userEntity';
import { UserService } from './user.service';


@Controller('api/user')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    //Test
    @Post('/sayHi')
    sayHi(){
        this.userService.sayHi();
    }

    //Create user
    @Post('/createUser')
    createUser(@Body() user : CreateUserDto){
        this.userService.createAnUser(user);
    }

    

}
