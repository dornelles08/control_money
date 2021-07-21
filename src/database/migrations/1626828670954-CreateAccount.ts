import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccount1626828670954 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "account",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "user_id",
          type: "uuid",
        },      
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "value",
          type: "decimal",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
      ],
      foreignKeys: [
        {
          name: "FKUserIdAccount",
          referencedTableName: "users",
          referencedColumnNames: ["id"],
          columnNames: ["user_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        },
      ],
    })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("account");
  }

}
