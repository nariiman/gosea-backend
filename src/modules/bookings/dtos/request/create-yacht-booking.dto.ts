import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CreateTransportationDto } from './create-transportation.dto';

export enum BookingType {
  HOURLY = 'hourly',
  OVERNIGHT = 'overnight',
}

export class CreateYachtBookingDto {
  @IsEnum(BookingType)
  bookingType: 'hourly' | 'overnight';

  @IsDateString()
  hourlyDate?: string;

  @IsDateString()
  startDate?: string;

  @IsDateString()
  endDate?: string;

  @IsString()
  startTime?: string; // should be in "HH:mm" format

  @IsNumber()
  hours?: number;

  @IsNumber()
  guests: number;

  @IsUUID()
  userId: string;

  @IsNumber()
  price: number;

  @IsNumber()
  yachtId: number;

  @IsArray()
  activities?: number[];

  @IsOptional()
  transportationRequest?: CreateTransportationDto;
}
