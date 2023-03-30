const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateTurkeyCountry20230329115000 {

    async up(queryRunner) {
        await queryRunner.query(
        `insert into \`country\` (\`id\`,\`name\`) values ('01a88864-b14e-41d5-86ed-110ffbd6c2ce','Turkey');`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
        `delete from \`country\` where \`id\`='01a88864-b14e-41d5-86ed-110ffbd6c2ce'`
        )
    }

}
