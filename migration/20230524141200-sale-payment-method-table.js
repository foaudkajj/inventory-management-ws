const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SalePaymentMethodTable20230524141200 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`sale_payment_method\` (
            \`id\` char(36) not null,
            \`amount\` decimal(8,2) not null,
            \`sale_id\` char(36) not null,
            \`payment_method_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (sale_id) REFERENCES sale(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (payment_method_id) REFERENCES payment_method(id)
            on delete restrict
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale_payment_method\`;`,
          );
    }

}
