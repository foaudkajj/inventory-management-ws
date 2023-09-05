const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class updateCustomerInfoTable20230901192000 {

  async up(queryRunner) {
    await queryRunner.query(`      
          ALTER TABLE \`customer_info\` DROP COLUMN \`accent_insensitive_name\`
        `)
  }

  async down(queryRunner) {
    await queryRunner.query(`      
      ALTER TABLE \`customer_info\` ADD COLUMN \`accent_insensitive_name\`
    `)
  }

}
