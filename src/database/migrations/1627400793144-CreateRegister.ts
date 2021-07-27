import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRegister1627400793144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "registers",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "typo",
                    type: "varchar"
                },
                {
                    name: "value",
                    type: "decimal"
                },
                {
                    name: "category_id",
                    type: "uuid"
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "account_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "card_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
              {
                name: "FKUserIdRegister",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
              },
              {
                name: "FKCategoryIdRegister",
                referencedTableName: "categories",
                referencedColumnNames: ["id"],
                columnNames: ["category_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
              },
              {
                name: "FKCardIdRegister",
                referencedTableName: "cards",
                referencedColumnNames: ["id"],
                columnNames: ["card_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
              },
              {
                name: "FKAccountIdRegister",
                referencedTableName: "account",
                referencedColumnNames: ["id"],
                columnNames: ["account_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
              },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("registers");
    }

}
