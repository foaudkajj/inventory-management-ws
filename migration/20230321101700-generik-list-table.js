const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class GenericListTable20230321101700 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`generic_list\` (
            \`id\` char(36) not null,
            \`name\` varchar(100) not null,
            \`description\` varchar(1000) null,
            PRIMARY KEY (id)
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`generic_list\`;`,
          );
    }

}
