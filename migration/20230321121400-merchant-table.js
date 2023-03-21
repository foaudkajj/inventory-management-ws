const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class MerchantTable20230321121400 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`merchant\` (
            \`id\` char(36) not null,
            \`title\` varchar(500) not null,
            \`company_type\` char(36) not null,
            \`founding_date\` datetime null,
            \`tax_office\` varchar(300) null,
            \`tax_number\` varchar(50) null,
            \`phone\` varchar(20) null,
            \`website\` varchar(50) null,
            PRIMARY KEY (id),
            FOREIGN KEY (company_type) REFERENCES generic_list_item(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`merchant\`;
            DROP FOREIGN KEY company_type;
            `,
          );
    }

}
