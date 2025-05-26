import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateTransportationDto } from './create-transportation.dto';

export class CreateActivityBookingDto {
  @IsDateString()
  date: string;

  @IsString()
  preferredTime: string;

  @IsString()
  timeSlot: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  riders: number;

  @IsNumber()
  price: number;

  @IsNumber()
  activityId: number;

  @IsString()
  userId: string;

  @IsOptional()
  transportationRequest?: CreateTransportationDto;
}
