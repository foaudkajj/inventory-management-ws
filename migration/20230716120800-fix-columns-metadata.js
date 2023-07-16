const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class fixColumnsMetadata20230716120800 {

    async up(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE \`product\` MODIFY \`branch_id\`char(36) not null;`
        );
        await queryRunner.query(
            `ALTER TABLE \`role\` MODIFY \`merchant_id\`char(36) not null;`
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE \`product\` MODIFY \`branch_id\`char(36) null;`
        );
        await queryRunner.query(
            `ALTER TABLE \`role\` MODIFY \`merchant_id\`char(36)  null;`
        );
    }

}
