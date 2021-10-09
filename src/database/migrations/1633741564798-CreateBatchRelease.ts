import { MigrationInterface, QueryRunner } from "typeorm";
import { Release } from '../../entities/Release'
export class CreateBatchRelease1633741564798 implements MigrationInterface {

    data = [
        {
            "id": 7,
            "value": 11,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 10,
            "value": 90000,
            "amount": 1,
            "category_id": 15
        },
        {
            "id": 1,
            "value": 100,
            "amount": 1,
            "category_id": 3
        },
        {
            "id": 16,
            "value": 10,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 9,
            "value": 10000,
            "amount": 1,
            "category_id": 15
        },
        {
            "id": 14,
            "value": 20,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 3,
            "value": 100,
            "amount": 1,
            "category_id": 3
        },
        {
            "id": 11,
            "value": 200000,
            "amount": 3,
            "category_id": 16
        },
        {
            "id": 5,
            "value": 20,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 13,
            "value": 1,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 6,
            "value": 10,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 15,
            "value": 10,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 4,
            "value": 20,
            "amount": 1,
            "category_id": 3
        },
        {
            "id": 8,
            "value": 200000,
            "amount": 1,
            "category_id": 15
        },
        {
            "id": 2,
            "value": 200,
            "amount": 8,
            "category_id": 3
        },
        {
            "id": 17,
            "value": 87,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 18,
            "value": 1,
            "amount": 1,
            "category_id": 4
        },
        {
            "id": 12,
            "value": 900000,
            "amount": 1,
            "category_id": 16
        },
    ]

    public async up(queryRunner: QueryRunner): Promise<void> {

        this.data.forEach(async item => {
            await queryRunner.manager
                .createQueryBuilder()
                .insert()
                .into(Release)
                .values({

                    "id": item.id,
                    "value": item.value,
                    "amount": item.amount,
                    "category_id": item.category_id

                })
                .execute()
        })

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.data.forEach(async item => {
            await queryRunner.manager
                .createQueryBuilder()
                .delete()
                .from(Release)
                .where(`id=${item.id}`)
                .execute()
        })
    }

}
