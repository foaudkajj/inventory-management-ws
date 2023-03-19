const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class PaymentMethodTable20230316163425 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`payment_method\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`payment_method\`;`,
          );
    }

}
