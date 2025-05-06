import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDestinationIdToActivity1745012898203 implements MigrationInterface {
    name = 'AddDestinationIdToActivity1745012898203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_phones" DROP CONSTRAINT "client_phones_client_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "feedback_client_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "feedback_booking_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "cash_payment" DROP CONSTRAINT "cash_payment_payment_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "visa_payment" DROP CONSTRAINT "visa_payment_payment_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "payment_invoice_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "invoice_booking_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "booking_client_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "booking_yacht_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "booking_catering_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "booking_activities" DROP CONSTRAINT "booking_activities_booking_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "booking_activities" DROP CONSTRAINT "booking_activities_activity_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "transport_request" DROP CONSTRAINT "transport_request_company_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "feedback_rating_check"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "payment_payment_type_check"`);
        await queryRunner.query(`ALTER TABLE "yacht" ADD "destination_id" integer`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "destination_id" integer`);
        await queryRunner.query(`CREATE UNIQUE INDEX "catering_pkey" ON "catering" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "client_phones_phone_key" ON "client_phones" ("phone") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "client_phones_pkey" ON "client_phones" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "feedback_pkey" ON "feedback" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "client_profile_pkey" ON "client_profile" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "client_profile_email_key" ON "client_profile" ("email") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "yacht_pkey" ON "yacht" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "cash_payment_pkey" ON "cash_payment" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "visa_payment_pkey" ON "visa_payment" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "payment_pkey" ON "payment" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "invoice_pkey" ON "invoice" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "booking_pkey" ON "booking" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "booking_activities_pkey" ON "booking_activities" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "activity_pkey" ON "activity" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "transport_request_pkey" ON "transport_request" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "transport_company_license_key" ON "transport_company" ("license") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "transport_company_pkey" ON "transport_company" ("id") `);
        await queryRunner.query(`ALTER TABLE "client_phones" ADD CONSTRAINT "FK_6e22d73120616b907ee488f1373" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "FK_93b45a1a076b08fc6055a94bd9d" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "FK_e02982ecb5876db1639f835506f" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cash_payment" ADD CONSTRAINT "FK_21dfd75ef12a113273067db4daa" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visa_payment" ADD CONSTRAINT "FK_653db479235c301a5f61dda8ccc" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_20cc84d8a2274ae86f551360c11" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_ee283c9adbadc5f1a2ff392eee5" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_932c2d6ef31ae4ffd4ccd4153f2" FOREIGN KEY ("catering_id") REFERENCES "catering"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_65f5f7fdebd59a3289ee2f77b73" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_4a5179b1a7afad268ef1727789c" FOREIGN KEY ("yacht_id") REFERENCES "yacht"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking_activities" ADD CONSTRAINT "FK_f4abe78d881433a8ac7c629f97c" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking_activities" ADD CONSTRAINT "FK_d0fb0fb03b292f6dd2d9ddc323d" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_3eb1b84c6993e5134564aeef99c" FOREIGN KEY ("destination_id") REFERENCES "destinations"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transport_request" ADD CONSTRAINT "FK_47769f9bbf18d2355adb90b718e" FOREIGN KEY ("company_id") REFERENCES "transport_company"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transport_request" DROP CONSTRAINT "FK_47769f9bbf18d2355adb90b718e"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_3eb1b84c6993e5134564aeef99c"`);
        await queryRunner.query(`ALTER TABLE "booking_activities" DROP CONSTRAINT "FK_d0fb0fb03b292f6dd2d9ddc323d"`);
        await queryRunner.query(`ALTER TABLE "booking_activities" DROP CONSTRAINT "FK_f4abe78d881433a8ac7c629f97c"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_4a5179b1a7afad268ef1727789c"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_65f5f7fdebd59a3289ee2f77b73"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_932c2d6ef31ae4ffd4ccd4153f2"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_ee283c9adbadc5f1a2ff392eee5"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_20cc84d8a2274ae86f551360c11"`);
        await queryRunner.query(`ALTER TABLE "visa_payment" DROP CONSTRAINT "FK_653db479235c301a5f61dda8ccc"`);
        await queryRunner.query(`ALTER TABLE "cash_payment" DROP CONSTRAINT "FK_21dfd75ef12a113273067db4daa"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "FK_e02982ecb5876db1639f835506f"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "FK_93b45a1a076b08fc6055a94bd9d"`);
        await queryRunner.query(`ALTER TABLE "client_phones" DROP CONSTRAINT "FK_6e22d73120616b907ee488f1373"`);
        await queryRunner.query(`DROP INDEX "public"."transport_company_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."transport_company_license_key"`);
        await queryRunner.query(`DROP INDEX "public"."transport_request_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."activity_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."booking_activities_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."booking_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."invoice_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."payment_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."visa_payment_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."cash_payment_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."yacht_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."client_profile_email_key"`);
        await queryRunner.query(`DROP INDEX "public"."client_profile_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."feedback_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."client_phones_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."client_phones_phone_key"`);
        await queryRunner.query(`DROP INDEX "public"."catering_pkey"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "destination_id"`);
        await queryRunner.query(`ALTER TABLE "yacht" DROP COLUMN "destination_id"`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "payment_payment_type_check" CHECK (((payment_type)::text = ANY ((ARRAY['Cash'::character varying, 'Visa'::character varying])::text[])))`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "feedback_rating_check" CHECK (((rating >= 1) AND (rating <= 5)))`);
        await queryRunner.query(`ALTER TABLE "transport_request" ADD CONSTRAINT "transport_request_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "transport_company"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking_activities" ADD CONSTRAINT "booking_activities_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking_activities" ADD CONSTRAINT "booking_activities_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "booking_catering_id_fkey" FOREIGN KEY ("catering_id") REFERENCES "catering"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "booking_yacht_id_fkey" FOREIGN KEY ("yacht_id") REFERENCES "yacht"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "booking_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "invoice_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "payment_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visa_payment" ADD CONSTRAINT "visa_payment_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cash_payment" ADD CONSTRAINT "cash_payment_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "feedback_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "feedback_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_phones" ADD CONSTRAINT "client_phones_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
