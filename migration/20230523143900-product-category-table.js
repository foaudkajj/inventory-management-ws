const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productCategoryTable20230704154200 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`product_category\` (
            \`id\` char(100) not null,
            \`name\` varchar(50) not null
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
