import { ConsumptionService } from './consumption.service';
import { ConsumptionController } from './consumption.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionEntity } from "../../database/entity/consumptionEntity";
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/database/entity/userEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ConsumptionEntity, UserEntity])],
    controllers: [
        ConsumptionController],
    providers: [
        ConsumptionService, UserService],
})
export class ConsumptionModule { }
