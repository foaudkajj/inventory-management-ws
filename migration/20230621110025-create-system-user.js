const { MigrationInterface, QueryRunner } = require("typeorm");
module.exports = class createSystemUser20230621110025 {

    async up(queryRunner) {
        await queryRunner.query(
            `insert into \`generic_list\`(\`id\`,\`name\`) values
            ('c44a84c8-fb2b-418d-a79c-eba3889f38bb','system-generic-list');`
        )
        await queryRunner.query(
            `  insert into \`generic_list_item\`(\`id\`,\`name\`,\`list_id\`) values 
            ('b4df6c9e-7c06-4c86-bbe0-9a6442f97587','system-generic-list-item','c44a84c8-fb2b-418d-a79c-eba3889f38bb');
            ` )
        await queryRunner.query(
            ` insert into \`merchant\`(\`id\`,\`title\`,\`company_type\`) values
            ('a136bba1-6119-444b-8b82-db92460fd2fb','system-merchant','b4df6c9e-7c06-4c86-bbe0-9a6442f97587');
            ` )
        await queryRunner.query(
            `  insert into \`role\`(\`id\`,\`name\`,\`merchant_id\`) values
            ('737df246-d5f3-4434-8e9d-db8a4c136eab','system-role','a136bba1-6119-444b-8b82-db92460fd2fb');
            ` )
        await queryRunner.query(
            ` insert into \`branch\`(\`id\`,\`name\`,\`city_id\`,\`country_id\`,\`merchant_id\`) values
            ('e854f50a-8c78-439c-b926-0583ade6f44b','system-branch','46d7163d-b443-4f1f-a5ac-cabd9dbd5840','01a88864-b14e-41d5-86ed-110ffbd6c2ce','a136bba1-6119-444b-8b82-db92460fd2fb');
            ` )
        await queryRunner.query(
            `  insert into \`user\`(\`id\`,\`first_name\`,\`last_name\`,\`username\`,\`password\`,\`branch_id\`,\`merchant_id\`,\`role_id\`) values
            ('9cb43a6a-ff04-44d1-9241-572c2ee03378','system-user','system-user','system-user','$2a$10$FLCrQUpKQuqMedxbKi1ilekwBFy2E8jbby8JvIwoLcX3Y9NeqAcfq','e854f50a-8c78-439c-b926-0583ade6f44b','a136bba1-6119-444b-8b82-db92460fd2fb','737df246-d5f3-4434-8e9d-db8a4c136eab');
            `    )

    }
    async down(queryRunner) {
        await queryRunner.query(
            `
            delete from \`generic-list\` where \`id\`='daac7887-216a-4bbb-9e43-60a5622151be';
            delete from \`generic-list-item\` where \`id\`='7aa942a1-49c1-4c5f-84a7-a936a77ce276';
            delete from \`merchant\` where \`id\`='a136bba1-6119-444b-8b82-db92460fd2fb';
            delete from \`role\` where \`id\`='737df246-d5f3-4434-8e9d-db8a4c136eab';
            delete from \`branch\` where \`id\`='e854f50a-8c78-439c-b926-0583ade6f44b';
            delete from \`user\` where \`id\`='9cb43a6a-ff04-44d1-9241-572c2ee03378';
            `
        )
    }

    //username:system-user , password:123456
}
