const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class customerInfoTableUpdate20230827144400 {

    async up(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE \`customer_info\` ADD COLUMN \`merchant_id\` char(36) not null,
            ADD FOREIGN KEY (merchant_id) REFERENCES merchant(id)
            ON DELETE RESTRICT
            ON UPDATE CASCADE`
        );
    }

    async down(queryRunner) {
        await queryRunner.query(`
        ALTER TABLE \`customer_info\` DROP COLUMN \`merchant_id\
        `
        );
    }

}
