import { PaymentEntity } from './../../database/entity/paymentEntity';
import { isDate } from 'class-validator';
import { UserService } from './../user/user.service';
import { ConsumptionService } from './../consumption/consumption.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { UserEntity } from 'src/database/entity/userEntity';
import { consumptionModel } from 'src/model/consumptionModel';
import { PaymentModel } from 'src/model/paymentModel';
import { Repository } from 'typeorm';


@Injectable()
export class PaymentService {


    /*
    
    Los rangos de costo por consumo es: de 1 a 100Kw el costo por KW es de 150, 
    de 101 a 300 es de 170 de 300 en adelante 190. 
    Pero si el cliente tiene mas de 50 años su consumo tiene un 10% de descuento.
    */

    constructor(@InjectRepository(PaymentEntity) private paymentModel: Repository<PaymentModel>,
        private UserService: UserService) {

    }

     /* 
     async registPayment(payment: PaymentModel) {

        return await this.paymentModel.insert(payment);
    }

    async payAnConsumption(payment: PaymentModel) {

        //return this.paymentModel.insert(payment);

    }*/

    async create(id: number, total: number, paid: boolean) {

        return await this.paymentModel.save({
            total: total,
            idConsumption: id,
            paid: paid
        })
    }

    getAll(){
        return this.paymentModel.find();
        
    }



    async getAllPaids() {


        this.paymentModel.find({
            select: ['id', 'idConsumption', 'paid', 'total'],
            where: {
                paid: true
            },
        })
            .then(response => console.log(response));
    }

    async getAllNoPaids() {


        this.paymentModel.find({
            select: ['id', 'idConsumption', 'paid', 'total'],
            where: {
                paid: false
            },
        })
            .then(response => console.log(response));
    }

    async getAllPaidsASC() {


        this.paymentModel.find({
            select: ['id', 'idConsumption', 'paid', 'total'],
            order: {
                paid: "ASC"
            },
        })
            .then(response => console.log(response));
    }

    async getConsumptionById(id: number) {
        const query = `SELECT * FROM consumption_entity WHERE consumption_entity.id = ${id};`;
        return this.paymentModel.query(query)
            .then(response => console.log(response));
    }
}
