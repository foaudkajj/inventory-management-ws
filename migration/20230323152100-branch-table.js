const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class BranchTable20230323152100 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`branch\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`city_id\` char(36) not null,
            \`country_id\` char(36) not null,
            \`merchant_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (city_id) REFERENCES city(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (country_id) REFERENCES country(id)
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
            `drop table \`branch\`;`,
          );
    }

}
