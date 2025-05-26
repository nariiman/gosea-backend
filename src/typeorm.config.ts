// src/typeorm.config.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Booking } from './entities/Booking';
import { BookingActivities } from './entities/BookingActivities';
import { Activity } from './entities/Activity';
import { ClientProfile } from './entities/ClientProfile';
import { ClientPhones } from './entities/ClientPhones';
import { Catering } from './entities/Catering';
import { Destinations } from './entities/Destinations';
import { Feedback } from './entities/Feedback';
import { Invoice } from './entities/Invoice';
import { VisaPayment } from './entities/VisaPayment';
import { Payment } from './entities/Payment';
import { TransportRequest } from './entities/TransportRequest';
import { CashPayment } from './entities/CashPayment';
import { TransportCompany } from './entities/TransportCompany';
import { Yacht } from './entities/Yacht';

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
    Booking,
    BookingActivities,
    Activity,
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
  migrations: ['./database/migrations/**/*.ts'],
});
