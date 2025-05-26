import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransportationDto {
  @IsString()
  @IsNotEmpty()
  pickup: string;

  @IsString()
  @IsNotEmpty()
  dropoff: string;
}
