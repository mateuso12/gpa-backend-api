import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FreightsService } from './freights.service';
import { CreateFreightDto } from './dto/create-freight.dto';
import { UpdateFreightDto } from './dto/update-freight.dto';

@Controller('freights')
export class FreightsController {
  constructor(private readonly freightsService: FreightsService) {}

  @Post()
  create(@Body() createFreightDto: CreateFreightDto) {
    return this.freightsService.create(createFreightDto);
  }

  @Get()
  findAll() {
    return this.freightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freightsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFreightDto: UpdateFreightDto) {
    return this.freightsService.update(id, updateFreightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freightsService.remove(id);
  }
}
