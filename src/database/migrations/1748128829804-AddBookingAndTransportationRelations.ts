import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBookingAndTransportationRelations1748128829804
  implements MigrationInterface
{
  name = 'AddBookingAndTransportationRelations1748128829804';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transport_request" ADD "booking_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD "transportation_request_id" integer`,
    );
    await queryRunner.query(`ALTER TABLE "booking" ADD "user_uid" uuid`);
    await queryRunner.query(
      `ALTER TABLE "activity" ALTER COLUMN "rating" SET DEFAULT '4.8'`,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" ALTER COLUMN "guest_capacity" SET DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" ALTER COLUMN "beds" SET DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_request" ADD CONSTRAINT "FK_43ba21f2ccf352496429ec5aed0" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transport_request" DROP CONSTRAINT "FK_43ba21f2ccf352496429ec5aed0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" ALTER COLUMN "beds" SET DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" ALTER COLUMN "guest_capacity" SET DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity" ALTER COLUMN "rating" SET DEFAULT 4.8`,
    );
    await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "user_uid"`);
    await queryRunner.query(
      `ALTER TABLE "booking" DROP COLUMN "transportation_request_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_request" DROP COLUMN "booking_id"`,
    );
  }
}
