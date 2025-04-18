import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationsModule } from './modules/destinations/destinations.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: false, // Don't use true in production
    entities: [__dirname + '/**/*.entity{.ts,.js}']
  }), DestinationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
