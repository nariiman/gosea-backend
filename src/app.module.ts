import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationsModule } from './modules/destinations/destinations.module';
import { YachtsModule } from './modules/yachts/yachts.module';
import { ActivitiesModule } from './modules/activities/activities.module';
import { CateringModule } from './modules/catering/catering.module'; // ✅ added import
import { BookingActivities } from './entities/BookingActivities';
import { Activity } from './entities/Activity';
import { Booking } from './entities/Booking';
import { Catering } from './entities/Catering';
import { ClientProfile } from './entities/ClientProfile';
import { ClientPhones } from './entities/ClientPhones';
import { Feedback } from './entities/Feedback';
import { Invoice } from './entities/Invoice';
import { Payment } from './entities/Payment';
import { TransportCompany } from './entities/TransportCompany';
import { TransportRequest } from './entities/TransportRequest';
import { VisaPayment } from './entities/VisaPayment';
import { CashPayment } from './entities/CashPayment';
import { Destinations } from './entities/Destinations';
import { BookingsModule } from './modules/bookings/bookings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.dckbfpapqkabfssicehs',
      password: 'reservations_postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: false,
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
      ],
    }),
    DestinationsModule,
    ActivitiesModule,
    YachtsModule,
    CateringModule,
    BookingsModule,
  ],
})
export class AppModule {}
