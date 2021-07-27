import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCard1627400787902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cards",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "limit",
                    type: "decimal"
                },
                {
                    name: "closing",
                    type: "integer"
                },
                {
                    name: "due",
                    type: "integer"
                },
                {
                    name: "user_id",
                    type: "uuid"
                }
            ],
            foreignKeys: [
                {
                    name: "FKUserIdCard",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
