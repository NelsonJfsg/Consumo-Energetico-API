import { ConsumptionService } from './consumption.service';
import { ConsumptionController } from './consumption.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumptionEntity } from "../../database/entity/consumptionEntity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ConsumptionEntity])],
    controllers: [
        ConsumptionController],
    providers: [
        ConsumptionService],
})
export class ConsumptionModule { }
