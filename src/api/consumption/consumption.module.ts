import { ConsumptionService } from './consumption.service';

import { Module } from '@nestjs/common';
import { ConsumptionController } from './consumption.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConsumptionEntity } from "../../database/entity/consumptionEntity";

@Module({
    imports: [TypeOrmModule.forFeature([ConsumptionEntity])],
    controllers: [ConsumptionController],
    providers: [ConsumptionService,],
})
export class ConsumptionModule { }
