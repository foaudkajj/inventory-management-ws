const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class UnitTable20230521183500 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`unit\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`code\` varchar(10) not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`unit\`;`,
          );
    }

}
