const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class ProductTable20230523144000 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`product\` (
            \`id\` char(36) not null,
            \`name\` varchar(100) not null,
            \`barcode\` varchar(50) not null,
            \`short_code\` varchar(50)  null,
            \`color_id\` char(36) null,
            \`gender\` enum ('Male','Female','Other') null,
            \`price\` decimal(8,2) not null,
            \`size\` int null,
            \`quantity\` int not null,
            \`branch_id\` char(36) null,
            \`selling_price\` decimal(8,2) not null,
            \`description\` varchar(1000) null,
            \`unit_id\` char(36) not null,
            \`merchant_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (color_id) REFERENCES color(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (branch_id) REFERENCES branch(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (unit_id) REFERENCES unit(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (merchant_id) REFERENCES merchant(id)
            on delete restrict
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product\`;`,
          );
    }

}
