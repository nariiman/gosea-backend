import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destinations } from '../../entities/Destinations';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Destinations])],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
