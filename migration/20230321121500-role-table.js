const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class RoleTable20230321121500 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`role\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`merchant_id\` char(36)  null,
            PRIMARY KEY (id),
            FOREIGN KEY (merchant_id) REFERENCES merchant(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`role\`;
            DROP FOREIGN KEY list_id;
            `,
            
          );
    }

}
