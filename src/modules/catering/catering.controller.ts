import { Controller, Get, Param } from '@nestjs/common';
import { CateringService } from './catering.service';

@Controller('catering')
export class CateringController {
  constructor(private readonly cateringService: CateringService) {}

  @Get()
  getAll() {
    return this.cateringService.findAll();
  }

  @Get('/destination/:id')
  getByDestination(@Param('id') id: string) {
    return this.cateringService.findByDestination(+id);
  }
}
