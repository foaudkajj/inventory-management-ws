const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateTurkeyCountry20230329115000 {

    async up(queryRunner) {
        await queryRunner.query(
        `insert into \`country\` (\`id\`,\`name\`) values ('01a88864-b14e-41d5-86ed-110ffbd6c2ce','Turkey');`
        );

        await queryRunner.query(
            `insert into \`city\` (\`id\`,\`name\`,\`country_id\`) values 
            ('46d7163d-b443-4f1f-a5ac-cabd9dbd5840', 'Adana', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('645221d1-a366-4c64-9500-bbe68152e5f6', 'Adiyaman', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7e92f123-0e1b-4666-8087-581a9f992c2c', 'Afyon', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('a55c0ab1-f28a-4d1d-9b56-3bfef9e989ed', 'Agri', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('f4972f8a-bb29-4fa9-a27d-d70927e83427', 'Aksaray', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('2c932ba0-d8a1-4789-8788-aa88aff2b636', 'Amasya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('b828742f-c2a6-46bd-a1b8-7456c195d92d', 'Ankara', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7ec8f1fe-ca20-4b56-8c4b-c27b58c43cdd', 'Antalya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('627384be-6ab9-427f-abdb-6c895ded7505', 'Ardahan', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('9c9c6630-c994-4aa6-b18a-8807186f18df', 'Artvin', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('79515c33-9931-411c-b779-8fbf361174a4', 'Aydin', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('9b9af7b2-2b17-4d3c-854a-ec77875f8fa7', 'Balikesir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('e9aa8141-810b-4950-9e02-7a72905b4a54', 'Bartin', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('a3405c09-0147-471f-8ab8-39f02fbabbc5', 'Batman', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('f7040296-99b5-4fe1-9aed-25df93033f0f', 'Bayburt', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('be6fb3d2-501a-421f-9ffe-520e3f1dacab', 'Bilecik', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('45f52878-a0ab-4937-a682-d41b3a6631b9', 'Bingol', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7fc13957-232e-4714-9ab4-ac5463069a00', 'Bitlis', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('d3be94db-2336-4e38-a146-a3874556dafc', 'Bolu', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('02e9aa08-d945-4dd2-909e-b54b2b17a462', 'Burdur', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('17eba7f2-d563-4166-b8cd-e0d7c76b7829', 'Bursa', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('d7a3bcd8-a47d-48c0-93fd-6c21644f1484', 'Canakkale', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('5ed5a880-8985-4252-b353-e0e71878c2d8', 'Cankiri', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('bcebea63-75aa-4b3f-8519-9905cc8dd986', 'Corum', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('89b215af-be78-4ad2-8097-3c85d1d2d466', 'Denizli', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('2635109c-1a4d-4ad0-9350-e850632e35db', 'Diyarbakir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('f5323bfa-949b-4c27-a069-821aa5007190', 'Duzce', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('c460851d-bbb5-4591-8111-9aed70eb05fc', 'Edirne', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('26cdb348-b608-4edb-a486-6bb6ed707454', 'Elazig', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('fbf2aba1-2f5a-43ae-94e7-db73ac8baf2c', 'Erzincan', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7dd1975a-7a94-41cc-bd07-fbd8e803145a', 'Erzurum', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('abedd782-5b6d-48f4-a655-f7764ef6c3ad', 'Eskisehir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('2fac8238-74b0-4940-9f00-2ddae7cc879a', 'Gaziantep', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('40b2bbcd-de3d-466c-8f28-8bb6f06acd58', 'Giresun', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7f9f3e33-e235-423d-bbad-22afb1999c63', 'Gumushane', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('488fcf92-fc3c-46f7-a074-a5eb35706c99', 'Hakkari', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('30745bf7-ade8-42e3-a2cf-fd23b621824c', 'Hatay', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7586e8be-5233-4e7e-8dad-3a3eee8a8f2b', 'Icel', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('3f7690b9-4d9b-4223-9b82-2b31067db55d', 'Igdir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('459fa328-47c8-470b-80cf-df1799705680', 'Isparta', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('4ba161e3-46df-48e7-a039-c890b9bc3b3c', 'Istanbul', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('460df883-b4da-4d9b-aed4-9c6faf155ab6', 'Izmir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('9a291c58-7cd7-4812-9063-906808c7b156', 'Kahramanmaras','01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('8a272847-17d7-40cf-a1a0-efb8a77abefa', 'Karabuk', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('a1600a66-c618-4723-a90e-e81c2299dfea', 'Karaman', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('173112c2-eb9b-4baa-b2ba-c84cc3b0bb9e', 'Kars', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('c9f37b9e-21a3-4ced-bf7c-50b63ae4b0e9', 'Karsiyaka', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('b3138b07-eeff-4344-b604-e2d6b29af5d5', 'Kastamonu', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('f1f936d7-34ed-4a95-aa2e-af60d4bee9c5', 'Kayseri', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7de332ae-2882-4271-9e06-dfc7dd38f351', 'Kilis', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('7b43883d-f8f1-425a-9fa6-6bec05ebfa35', 'Kirikkale', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('3b8e01ef-e89b-4675-8af2-a4ca6f23c2fe', 'Kirklareli', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('b7fb7bfd-cc09-42c2-866e-676aa968ea26', 'Kirsehir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('302a5e45-2db1-4000-88aa-0fa4580cef6d', 'Kocaeli', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('d9fdba03-e4ca-43b7-aaef-1dc80759edee', 'Konya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('8fa8b774-785e-4061-ac68-ee34a9aabb27', 'Kutahya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('892ad5c7-374f-4f60-a69b-d534f6d878d1', 'Lefkosa', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('2a5c45d4-a577-4f50-9dd0-340aae8eac38', 'Malatya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('712ed549-5279-407e-bac8-5302c7526fb9', 'Manisa', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('74d538ed-4dfb-42da-bd91-d0338e296e03', 'Mardin', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('44ce977d-2bbb-42df-b1c4-d8b653539c2a', 'Mugla', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('54a07d3c-471a-4bc6-9371-0e582cf3ce90', 'Mus', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('a076fc4a-b150-4629-b3f8-877fc6eecaee', 'Nevsehir', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('6d5f449c-247f-4e16-9bc6-d003dd1838cd', 'Nigde', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('f416b337-63a7-4557-ad62-2f2a30d84806', 'Ordu', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('e5d03782-99fa-4349-9a95-02538e6190b6', 'Osmaniye', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('9c9ce06b-2663-45d4-80cb-ac0e34e924c0', 'Rize', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('89be99d4-6cf8-437f-a119-281ea4384c32', 'Sakarya', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('ba8c0961-6152-4d7e-9a28-a948ca26e6e1', 'Samsun', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('d9eb5429-e3a8-4a0a-938d-9ab1b129d0ea', 'Sanliurfa', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('ce9b9b65-dd34-4161-982b-4f49aa070b37', 'Siirt', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('c0dd8b08-1c72-43ab-82be-5af0dc7d3244', 'Sinop', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('ce17377d-f2c2-46ac-9121-9b5b3bf7695f', 'Sirnak', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('561ae071-0e97-4342-8dc4-668d212dace9', 'Sivas', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('34366a6c-1248-44be-a313-456790a30ba6', 'Tekirdag', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('a1327a36-d347-42e3-ad64-fe86d8d8320f', 'Tokat', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('b755bfc4-6594-491f-87cb-1e91dd9ea356', 'Trabzon', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('85c45bc6-8210-4fb4-ad44-8f0996c10764', 'Tunceli', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('76570168-3234-4423-b9a7-730d57285837', 'Usak', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('cca2c4e6-1bfa-4a75-b2f5-1eb29bf0201a', 'Van', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('2ff1ff68-1dad-4929-b352-96f1f08a2498', 'Yalova', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('18de6868-bd14-4f2d-abcd-02808de766aa', 'Yozgat', '01a88864-b14e-41d5-86ed-110ffbd6c2ce'),
            ('54a50a77-6d47-4f36-9c46-1f55f5d297b8', 'Zonguldak', '01a88864-b14e-41d5-86ed-110ffbd6c2ce');`
            );
    }

    async down(queryRunner) {
        await queryRunner.query(
        `delete from \`country\` where \`id\`='01a88864-b14e-41d5-86ed-110ffbd6c2ce'`
        );

        await queryRunner.query(
            `delete from \`city\` where \`country_id\`='01a88864-b14e-41d5-86ed-110ffbd6c2ce'`
        );
    }

}
