const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class UserTable20230324102000 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`user\` (
            \`id\` char(36) not null,
            \`first_name\` varchar(50) not null,
            \`last_name\` varchar(50) not null,
            \`username\` varchar(50) not null,
            \`status\` enum ('Active','Passive') null default 'Active',
            \`password\` varchar(200) null,
            \`picture_url\` varchar(200) null,
            \`email\` varchar(50) null,
            \`gsm\` varchar(30) null,
            \`salt\` varchar(100) null,
            \`branch_id\` char(36) not null,
            \`role_id\` char(36) not null,
            \`merchant_id\` char(36) not null,
            PRIMARY KEY (id),
            FOREIGN KEY (branch_id) REFERENCES branch(id)
            on delete restrict
            ON UPDATE CASCADE,
            FOREIGN KEY (role_id) REFERENCES role(id)
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
            `drop table \`user\`;`,
          );
    }

}
