const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SaleTable20230523143500 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`sale\` (
            \`id\` char(36) not null,
            \`date\` datetime not null,
            \`total\` decimal(8, 2) not null,
            \`user_id\` char(36) not null,
            \`merchant_id\` char(36) not null,
            \`branch_id\` char(36) not null,
            \`customer_info_id\` char(36)  null,
            PRIMARY KEY (id),
            FOREIGN KEY (user_id) REFERENCES user(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (merchant_id) REFERENCES merchant(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (branch_id) REFERENCES branch(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (customer_info_id) REFERENCES customer_info(id)
            on delete restrict
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale\`;`,
          );
    }
}
