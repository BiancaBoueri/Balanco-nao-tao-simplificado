import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRelease1633737243368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "release",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "value",
                        type: "int",
                    },
                    {
                        name: "amount",
                        type: "int",
                    },
                    {
                        name: "category_id",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],

                foreignKeys: [
                    {
                        name: 'foreignKeysCategoryRelease',
                        columnNames: ["category_id"],
                        referencedColumnNames: ['id'],
                        referencedTableName: "category",
                        onDelete: "SET NULL",

                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("release");
    }

}










