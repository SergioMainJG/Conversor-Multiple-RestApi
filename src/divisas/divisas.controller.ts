import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DivisasService } from './divisas.service';
import { CreateDivisaDto } from './dto/create-divisa.dto';
import { UpdateDivisaDto } from './dto/update-divisa.dto';

@Controller('divisas')
export class DivisasController {
  constructor(private readonly divisasService: DivisasService) {}

  @Post()
  create(@Body() createDivisaDto: CreateDivisaDto) {
    return this.divisasService.create(createDivisaDto);
  }

  @Get()
  findAll() {
    return this.divisasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDivisaDto: UpdateDivisaDto) {
    return this.divisasService.update(+id, updateDivisaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisasService.remove(+id);
  }
}
