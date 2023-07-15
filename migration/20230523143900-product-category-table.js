const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productCategoryTable20230523143900 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`product_category\` (
            \`id\` char(36) not null,
            \`name\` varchar(100) not null,
            PRIMARY KEY (id)
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product_category\`;`,
        );
    }
}
