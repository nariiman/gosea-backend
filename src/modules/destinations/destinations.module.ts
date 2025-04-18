import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { Destinations } from 'src/entities/Destinations';

@Module({
  imports: [TypeOrmModule.forFeature([Destinations])],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
