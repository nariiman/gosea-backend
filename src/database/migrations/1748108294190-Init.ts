import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1748108294190 implements MigrationInterface {
  public name = 'Init1748108294190';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "yacht" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "yacht_type" character varying(100), "price_per_hour" numeric(10,2) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "pics" character varying, "destination_id" integer, "duration_unit" character varying(20), "durations" character varying, "gallery" text, "guest_capacity" integer DEFAULT 1, "beds" integer DEFAULT 1, CONSTRAINT "PK_8ab27befc2081dab5e0486cbd5f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "yacht_pkey" ON "yacht" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "destinations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "imageUrl" character varying, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_69c5e8db964dcb83d3a0640f3c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "catering" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "caterer" character varying(255), "price_per_person" numeric(10,2) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "pics" character varying, "description" text, "destination_id" integer, CONSTRAINT "PK_5e9cc8631e8f503b0612637f970" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "catering_pkey" ON "catering" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "client_phones" ("id" SERIAL NOT NULL, "phone" character varying(20) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "client_id" integer, CONSTRAINT "UQ_1510f46fefc5255a9663a9a13d9" UNIQUE ("phone"), CONSTRAINT "PK_3181b355647814ff8cd8ad7728f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "client_phones_phone_key" ON "client_phones" ("phone") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "client_phones_pkey" ON "client_phones" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "comments" text, "rating" integer, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "booking_id" integer, "client_id" integer, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "feedback_pkey" ON "feedback" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "client_profile" ("id" SERIAL NOT NULL, "first_name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "address" text, "email" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_75b9bdbe6bfc6f0abd4226cd2b3" UNIQUE ("email"), CONSTRAINT "PK_c83cb406437edcd525bfd139439" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "client_profile_pkey" ON "client_profile" ("id") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "client_profile_email_key" ON "client_profile" ("email") `,
    );
    await queryRunner.query(
      `CREATE TABLE "cash_payment" ("id" SERIAL NOT NULL, "currency" character varying(10) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "payment_id" integer, CONSTRAINT "PK_21bdb6f3c81e2b3557b76ca667d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cash_payment_pkey" ON "cash_payment" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "visa_payment" ("id" SERIAL NOT NULL, "expiry_date" date NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "payment_id" integer, CONSTRAINT "PK_d301431ad81e1764e0ad054227b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "visa_payment_pkey" ON "visa_payment" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" SERIAL NOT NULL, "total" numeric(10,2) NOT NULL, "payment_date" TIMESTAMP DEFAULT now(), "payment_type" character varying(50), "payment_status" character varying(50) DEFAULT 'Pending', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "invoice_id" integer, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "payment_pkey" ON "payment" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "invoice_total" numeric(10,2) NOT NULL, "invoice_date" TIMESTAMP DEFAULT now(), "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "booking_id" integer, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "invoice_pkey" ON "invoice" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "booking" ("id" SERIAL NOT NULL, "booking_date" TIMESTAMP NOT NULL, "reservation_date" TIMESTAMP NOT NULL, "reservation_time" TIME NOT NULL, "number_of_people" integer NOT NULL, "booking_price" numeric(10,2) NOT NULL, "discount" numeric(10,2) DEFAULT 0.00, "payment_type" character varying(50), "booking_status" character varying(50) DEFAULT 'pending', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "catering_id" integer, "client_id" integer, "yacht_id" integer, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "booking_pkey" ON "booking" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "booking_activities" ("id" SERIAL NOT NULL, "start_time" TIME NOT NULL, "end_time" TIME NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "activity_id" integer, "booking_id" integer, CONSTRAINT "PK_c94083b02238806d71d901b2c6f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "booking_activities_pkey" ON "booking_activities" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "activity_type" character varying(100), "price_per_hour" numeric(10,2) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "pics" character varying, "destination_id" integer, "min_age" integer, "rating" numeric(2,1) NOT NULL DEFAULT '4.8', "review_count" integer NOT NULL DEFAULT '100', "duration_options" text array, "duration_unit" integer NOT NULL DEFAULT '15', "description" text, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "activity_pkey" ON "activity" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "transport_request" ("id" SERIAL NOT NULL, "request_type" character varying(100), "request_description" text, "status" character varying(50) DEFAULT 'Pending', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "company_id" integer, CONSTRAINT "PK_598ed0139156260446fff64b3a6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "transport_request_pkey" ON "transport_request" ("id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "transport_company" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "address" text, "license" character varying(100) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_3ef0149fa830727094a44b15dd8" UNIQUE ("license"), CONSTRAINT "PK_537319775514aba1fe82e0d9cf8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "transport_company_license_key" ON "transport_company" ("license") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "transport_company_pkey" ON "transport_company" ("id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" ADD CONSTRAINT "FK_2e525124505e75617f5515ab15d" FOREIGN KEY ("destination_id") REFERENCES "destinations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "catering" ADD CONSTRAINT "FK_569f469d9a85a36f8b2e432ae4d" FOREIGN KEY ("destination_id") REFERENCES "destinations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_phones" ADD CONSTRAINT "FK_6e22d73120616b907ee488f1373" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" ADD CONSTRAINT "FK_93b45a1a076b08fc6055a94bd9d" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" ADD CONSTRAINT "FK_e02982ecb5876db1639f835506f" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cash_payment" ADD CONSTRAINT "FK_21dfd75ef12a113273067db4daa" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "visa_payment" ADD CONSTRAINT "FK_653db479235c301a5f61dda8ccc" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_20cc84d8a2274ae86f551360c11" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD CONSTRAINT "FK_ee283c9adbadc5f1a2ff392eee5" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD CONSTRAINT "FK_932c2d6ef31ae4ffd4ccd4153f2" FOREIGN KEY ("catering_id") REFERENCES "catering"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD CONSTRAINT "FK_65f5f7fdebd59a3289ee2f77b73" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD CONSTRAINT "FK_4a5179b1a7afad268ef1727789c" FOREIGN KEY ("yacht_id") REFERENCES "yacht"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_activities" ADD CONSTRAINT "FK_f4abe78d881433a8ac7c629f97c" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_activities" ADD CONSTRAINT "FK_d0fb0fb03b292f6dd2d9ddc323d" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity" ADD CONSTRAINT "FK_3eb1b84c6993e5134564aeef99c" FOREIGN KEY ("destination_id") REFERENCES "destinations"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_request" ADD CONSTRAINT "FK_47769f9bbf18d2355adb90b718e" FOREIGN KEY ("company_id") REFERENCES "transport_company"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transport_request" DROP CONSTRAINT "FK_47769f9bbf18d2355adb90b718e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity" DROP CONSTRAINT "FK_3eb1b84c6993e5134564aeef99c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_activities" DROP CONSTRAINT "FK_d0fb0fb03b292f6dd2d9ddc323d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_activities" DROP CONSTRAINT "FK_f4abe78d881433a8ac7c629f97c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" DROP CONSTRAINT "FK_4a5179b1a7afad268ef1727789c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" DROP CONSTRAINT "FK_65f5f7fdebd59a3289ee2f77b73"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" DROP CONSTRAINT "FK_932c2d6ef31ae4ffd4ccd4153f2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "invoice" DROP CONSTRAINT "FK_ee283c9adbadc5f1a2ff392eee5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_20cc84d8a2274ae86f551360c11"`,
    );
    await queryRunner.query(
      `ALTER TABLE "visa_payment" DROP CONSTRAINT "FK_653db479235c301a5f61dda8ccc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cash_payment" DROP CONSTRAINT "FK_21dfd75ef12a113273067db4daa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" DROP CONSTRAINT "FK_e02982ecb5876db1639f835506f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" DROP CONSTRAINT "FK_93b45a1a076b08fc6055a94bd9d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_phones" DROP CONSTRAINT "FK_6e22d73120616b907ee488f1373"`,
    );
    await queryRunner.query(
      `ALTER TABLE "catering" DROP CONSTRAINT "FK_569f469d9a85a36f8b2e432ae4d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "yacht" DROP CONSTRAINT "FK_2e525124505e75617f5515ab15d"`,
    );
    await queryRunner.query(`DROP INDEX "public"."transport_company_pkey"`);
    await queryRunner.query(
      `DROP INDEX "public"."transport_company_license_key"`,
    );
    await queryRunner.query(`DROP TABLE "transport_company"`);
    await queryRunner.query(`DROP INDEX "public"."transport_request_pkey"`);
    await queryRunner.query(`DROP TABLE "transport_request"`);
    await queryRunner.query(`DROP INDEX "public"."activity_pkey"`);
    await queryRunner.query(`DROP TABLE "activity"`);
    await queryRunner.query(`DROP INDEX "public"."booking_activities_pkey"`);
    await queryRunner.query(`DROP TABLE "booking_activities"`);
    await queryRunner.query(`DROP INDEX "public"."booking_pkey"`);
    await queryRunner.query(`DROP TABLE "booking"`);
    await queryRunner.query(`DROP INDEX "public"."invoice_pkey"`);
    await queryRunner.query(`DROP TABLE "invoice"`);
    await queryRunner.query(`DROP INDEX "public"."payment_pkey"`);
    await queryRunner.query(`DROP TABLE "payment"`);
    await queryRunner.query(`DROP INDEX "public"."visa_payment_pkey"`);
    await queryRunner.query(`DROP TABLE "visa_payment"`);
    await queryRunner.query(`DROP INDEX "public"."cash_payment_pkey"`);
    await queryRunner.query(`DROP TABLE "cash_payment"`);
    await queryRunner.query(`DROP INDEX "public"."client_profile_email_key"`);
    await queryRunner.query(`DROP INDEX "public"."client_profile_pkey"`);
    await queryRunner.query(`DROP TABLE "client_profile"`);
    await queryRunner.query(`DROP INDEX "public"."feedback_pkey"`);
    await queryRunner.query(`DROP TABLE "feedback"`);
    await queryRunner.query(`DROP INDEX "public"."client_phones_pkey"`);
    await queryRunner.query(`DROP INDEX "public"."client_phones_phone_key"`);
    await queryRunner.query(`DROP TABLE "client_phones"`);
    await queryRunner.query(`DROP INDEX "public"."catering_pkey"`);
    await queryRunner.query(`DROP TABLE "catering"`);
    await queryRunner.query(`DROP TABLE "destinations"`);
    await queryRunner.query(`DROP INDEX "public"."yacht_pkey"`);
    await queryRunner.query(`DROP TABLE "yacht"`);
  }
}
