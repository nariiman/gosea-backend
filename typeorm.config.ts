// typeorm.config.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Activity } from 'src/entities/Activity';
import { BookingActivities } from 'src/entities/BookingActivities';
import { Booking } from 'src/entities/Booking';
import { Catering } from 'src/entities/Catering';
import { ClientProfile } from 'src/entities/ClientProfile';
import { ClientPhones } from 'src/entities/ClientPhones';
import { Feedback } from 'src/entities/Feedback';
import { Invoice } from 'src/entities/Invoice';
import { Payment } from 'src/entities/Payment';
import { Destinations } from 'src/entities/Destinations';
import { TransportCompany } from 'src/entities/TransportCompany';
import { TransportRequest } from 'src/entities/TransportRequest';
import { VisaPayment } from 'src/entities/VisaPayment';
import { CashPayment } from 'src/entities/CashPayment';
import { Yacht } from 'src/entities/Yacht';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: 'aws-0-eu-central-1.pooler.supabase.com',
  port: 5432,
  username: 'postgres.dckbfpapqkabfssicehs',
  password: 'reservations_postgres',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  logging: false,
  entities: [
    BookingActivities,
    Activity,
    Booking,
    Catering,
    ClientProfile,
    ClientPhones,
    Feedback,
    Invoice,
    Payment,
    TransportCompany,
    TransportRequest,
    VisaPayment,
    CashPayment,
    Destinations,
    Yacht,
  ],
  migrations: ['database/migrations/*.ts'],
});
