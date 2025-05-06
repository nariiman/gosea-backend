import { Controller, Get, Param } from '@nestjs/common';
import { YachtsService } from './yachts.service';

@Controller('yachts')
export class YachtsController {
  constructor(private readonly yachtsService: YachtsService) {}

  @Get()
  getAll() {
    return this.yachtsService.findAll();
  }

  @Get('/destination/:id')
  getByDestination(@Param('id') id: string) {
    return this.yachtsService.findByDestination(+id);
  }
}