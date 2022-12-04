import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumptionEntity } from 'src/database/entity/consumptionEntity';
import { PaymentEntity } from 'src/database/entity/paymentEntity';
import { UserEntity } from 'src/database/entity/userEntity';
import { PaymentModel } from 'src/model/paymentModel';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService { 


    /*
    
    Los rangos de costo por consumo es: de 1 a 100Kw el costo por KW es de 150, 
    de 101 a 300 es de 170 de 300 en adelante 190. 
    Pero si el cliente tiene mas de 50 años su consumo tiene un 10% de descuento.
    */
   
    constructor(@InjectRepository(PaymentEntity) private paymentModel : Repository<PaymentModel>){

    }

    payAnConsumption(payment : PaymentModel){

        let consumption = 2;
        let edad = 0;



        if(consumption >= 100){
            consumption *= 150;
        }else{
            if(consumption >= 101 && consumption <= 300){
                consumption *= 170
            }else{
                if(consumption > 300){
                    consumption *= 190;
                }
            }
        }

        if(edad > 50){
            consumption *= 0.90;
        }


        return this.paymentModel.insert(payment);

    }


    async getAllPaids(){


        this.paymentModel.find({
            select : ['id','idConsumption','paid','total'],
            where : { paid : true
            },
        })
        .then(response => console.log(response));
    }

    async getAllNoPaids(){


        this.paymentModel.find({
            select : ['id','idConsumption','paid','total'],
            where : { paid : false
            },
        })
        .then(response => console.log(response));
    }

    async getAllPaidsASC(){


        this.paymentModel.find({
            select : ['id','idConsumption','paid','total'],
            order : { paid : "ASC"
            },
        })
        .then(response => console.log(response));
    }
}
