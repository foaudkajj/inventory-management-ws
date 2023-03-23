const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CountryTable20230320130000 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`country\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`country\`;`,
          );
    }

}
