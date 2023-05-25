const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class ColorTable20230311211800 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`color\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`code\` varchar(30)  null,
            PRIMARY KEY (id)
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`color\`;`,
          );
    }

}
