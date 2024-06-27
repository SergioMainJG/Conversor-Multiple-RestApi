import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CriptomonedasService } from './criptomonedas.service';
import { CreateCriptomonedaDto } from './dto/create-criptomoneda.dto';
import { UpdateCriptomonedaDto } from './dto/update-criptomoneda.dto';

@Controller('criptomonedas')
export class CriptomonedasController {
  constructor(private readonly criptomonedasService: CriptomonedasService) {}

  @Post()
  create(@Body() createCriptomonedaDto: CreateCriptomonedaDto) {
    return this.criptomonedasService.create(createCriptomonedaDto);
  }

  @Get()
  findAll() {
    return this.criptomonedasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.criptomonedasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCriptomonedaDto: UpdateCriptomonedaDto) {
    return this.criptomonedasService.update(+id, updateCriptomonedaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.criptomonedasService.remove(+id);
  }
}
