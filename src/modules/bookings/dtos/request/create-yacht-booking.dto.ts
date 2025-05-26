import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTransportationDto } from './create-transportation.dto';

export enum BookingType {
  HOURLY = 'hourly',
  OVERNIGHT = 'overnight',
}

class CreateCateringSelectionDto {
  @IsArray()
  menus: number[];

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsNumber()
  total?: number;
}

export class CreateYachtBookingDto {
  @IsEnum(BookingType)
  bookingType: 'hourly' | 'overnight';

  @IsDateString()
  bookingDate: string;

  @IsDateString()
  @IsOptional()
  hourlyDate?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsString()
  @IsOptional()
  startTime?: string;

  @IsNumber()
  @IsOptional()
  hours?: number;

  @IsNumber()
  numberOfPeople: number;

  @IsUUID()
  userUid: string;

  @IsNumber()
  bookingPrice: number;

  @IsDateString()
  reservationDate: string;

  @IsString()
  reservationTime: string;

  @IsNumber()
  yachtId: number;

  @IsArray()
  @IsOptional()
  activities?: number[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateTransportationDto)
  transportationRequest?: CreateTransportationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCateringSelectionDto)
  catering?: CreateCateringSelectionDto;
}
