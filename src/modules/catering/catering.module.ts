import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catering } from 'src/entities/Catering';
import { CateringController } from './catering.controller';
import { CateringService } from './catering.service';

@Module({
  imports: [TypeOrmModule.forFeature([Catering])],
  controllers: [CateringController],
  providers: [CateringService],
})
export class CateringModule {}
