// src/modules/destinations/destinations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destinations } from 'src/entities/Destinations';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Destinations])],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
