import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemperaturasService } from './temperaturas.service';
import { CreateTemperaturaDto } from './dto/create-temperatura.dto';
import { UpdateTemperaturaDto } from './dto/update-temperatura.dto';

@Controller('temperaturas')
export class TemperaturasController {
  constructor(private readonly temperaturasService: TemperaturasService) {}

  @Post()
  create(@Body() createTemperaturaDto: CreateTemperaturaDto) {
    return this.temperaturasService.create(createTemperaturaDto);
  }

  @Get()
  findAll() {
    return this.temperaturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temperaturasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemperaturaDto: UpdateTemperaturaDto) {
    return this.temperaturasService.update(+id, updateTemperaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temperaturasService.remove(+id);
  }
}
