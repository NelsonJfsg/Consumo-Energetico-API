import { UserService } from './user.service';
import { UserController } from './user.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entity/userEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
})
export class UserModule { }
