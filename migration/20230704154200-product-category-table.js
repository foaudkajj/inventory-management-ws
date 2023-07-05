const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productCategoryTable20230704154200 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`product_category\` (
            \`id\` char(100) not null,
            \`name\` varchar(50) not null,
            \`merchant_id\` char(36) not null,
            \`product_id\` char(36) not null,
            PRIMARY KEY (id), 
            FOREIGN KEY (merchant_id) REFERENCES merchant(id)
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
            `drop table \`product_category\`;`,
        );
    }
}
