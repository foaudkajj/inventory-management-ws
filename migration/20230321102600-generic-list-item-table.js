const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class GenericListItemTable20230321102600 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`generic_list_item\` (
            \`id\` char(36) not null,
            \`name\` varchar(100) not null,
            \`list_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (list_id) REFERENCES generic_list(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`generic_list_item\`;
            DROP FOREIGN KEY list_id;
            `,
          );
    }

}
