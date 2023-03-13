const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class RoleTable20230313121100 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`role\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`merchant_id\` char(36) not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`role\`;`,
          );
    }

}
