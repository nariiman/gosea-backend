import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/Booking';
import { AvailableTimesService } from './available-times.service';
import { AvailableTimesController } from './available-times.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [AvailableTimesController],
  providers: [AvailableTimesService],
})
export class AvailableTimesModule {}
