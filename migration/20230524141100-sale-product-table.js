const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SaleProductTable20230524141100 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`sale_product\` (
            \`id\` char(36) not null,
            \`sale_id\` char(36) not null,
            \`product_id\` char(36) not null,
            \`product_count\` int not null,
            \`price\` decimal(8,2) not null,
            \`celling_price\` decimal(8,2) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (sale_id) REFERENCES sale(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (product_id) REFERENCES product(id)
            on delete restrict
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale_product\`;`,
          );
    }

}
