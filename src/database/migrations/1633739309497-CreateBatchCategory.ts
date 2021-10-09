import { MigrationInterface, QueryRunner, QueryBuilder } from "typeorm";

import { Category } from '../../entities/Category'
export class CreateBatchCategory1633739309497 implements MigrationInterface {

    data = [
        {
            "id": 1,
            "name": "Ativos",
            "father": 0,
            "initial_value": 0
        },
        {
            "id": 2,
            "name": "Ativo Circulante",
            "father": 1,
            "initial_value": 0
        },
        {
            "id": 3,
            "name": "Empréstimos a funcionários",
            "father": 2,
            "initial_value": 0
        },
        {
            "id": 4,
            "name": "Estoque",
            "father": 0,
            "initial_value": 0
        }
        ,
        {
            "id": 6,
            "name": "Caixa",
            "father": 2,
            "initial_value": 0
        }
        ,
        {
            "id": 7,
            "name": "Bancos",
            "father": 2,
            "initial_value": 0
        }
        ,
        {
            "id": 8,
            "name": "Veículos",
            "father": 2,
            "initial_value": 0
        }
        ,
        {
            "id": 9,
            "name": "Ativo a Longo Prazo",
            "father": 1,
            "initial_value": 0
        }
        ,
        {
            "id": 10,
            "name": "Adiantamentos",
            "father": 9,
            "initial_value": 0
        }
        ,
        {
            "id": 11,
            "name": "Clientes",
            "father": 9,
            "initial_value": 0
        }
        ,
        {
            "id": 12,
            "name": "Empréstimos a funcionários",
            "father": 9,
            "initial_value": 0
        }
        ,
        {
            "id": 13,
            "name": "Ativo Permanente",
            "father": 1,
            "initial_value": 0
        }
        ,
        {
            "id": 14,
            "name": "Imobilizado",
            "father": 13,
            "initial_value": 0
        }
        ,
        {
            "id": 15,
            "name": "Veículos",
            "father": 14,
            "initial_value": 100
        }
        ,
        {
            "id": 16,
            "name": "Móveis",
            "father": 14,
            "initial_value": 0
        }
        ,
        {
            "id": 17,
            "name": "Diferido",
            "father": 13,
            "initial_value": 0
        }
        ,
        {
            "id": 18,
            "name": "Gastos com Estudos",
            "father": 17,
            "initial_value": 0
        }
    ]

    public async up(queryRunner: QueryRunner): Promise<void> {

        this.data.forEach(async item => {
            await queryRunner.manager
                .createQueryBuilder()
                .insert()
                .into(Category)
                .values({

                    "id": item.id,
                    "name": item.name,
                    "father": item.father,
                    "initial_value": item.initial_value

                })
                .execute()
        })


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.data.forEach(async item => {
            await queryRunner.manager
                .createQueryBuilder()
                .delete()
                .from(Category)
                .where(`id=${item.id}`)
                .execute()
        })

    }

}