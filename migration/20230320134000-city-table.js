const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CityTable20230320134000 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`city\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`country_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (country_id) REFERENCES country(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`city\`;
            DROP FOREIGN KEY country_id;
            `,
          );
    }

}
