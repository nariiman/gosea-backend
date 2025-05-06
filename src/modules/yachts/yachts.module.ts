import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Yacht } from 'src/entities/Yacht';
import { YachtsController } from './yachts.controller';
import { YachtsService } from './yachts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Yacht])],
  controllers: [YachtsController],
  providers: [YachtsService],
})
export class YachtsModule {}
