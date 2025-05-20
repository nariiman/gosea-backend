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
import { Migrations } from './entities/Migrations';
import { Payment } from './entities/Payment';
import { TransportCompany } from './entities/TransportCompany';
import { TransportRequest } from './entities/TransportRequest';
import { VisaPayment } from './entities/VisaPayment';
import { CashPayment } from './entities/CashPayment';
import { Destinations } from './entities/Destinations'; // ✅ required for TypeOrmModule.forFeature in DestinationsController

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
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
        Migrations,
        Payment,
        TransportCompany,
        TransportRequest,
        VisaPayment,
        CashPayment,
        Destinations, // ✅ ensure entity is loaded
      ],
    }),
    DestinationsModule,
    ActivitiesModule,
    YachtsModule,
    CateringModule, // ✅ added here
  ],
})
export class AppModule {}
