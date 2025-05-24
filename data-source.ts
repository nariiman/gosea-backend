import { DataSource } from 'typeorm';
import { Activity } from './src/entities/Activity';
import { Destinations } from './src/entities/Destinations';
import { BookingActivities } from './src/entities/BookingActivities';
import { Booking } from './src/entities/Booking';
import { Catering } from './src/entities/Catering';
import { ClientProfile } from './src/entities/ClientProfile';
import { ClientPhones } from './src/entities/ClientPhones';
import { Feedback } from './src/entities/Feedback';
import { Invoice } from './src/entities/Invoice';
import { Migrations } from './src/entities/Migrations';
import { Payment } from './src/entities/Payment';
import { TransportCompany } from './src/entities/TransportCompany';
import { TransportRequest } from './src/entities/TransportRequest';
import { VisaPayment } from './src/entities/VisaPayment';
import { CashPayment } from './src/entities/CashPayment';
import { Yacht } from './src/entities/Yacht';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [
    Activity,
    Destinations,
    BookingActivities,
    Booking,
    Catering,
    ClientProfile,
    ClientPhones,
    Feedback,
    Invoice,
    Migrations,
    Payment,
    TransportCompany,
    TransportRequest,
    VisaPayment,
    CashPayment,
    Yacht,
  ],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
