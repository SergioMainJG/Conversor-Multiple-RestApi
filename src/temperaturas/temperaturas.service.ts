import { Injectable } from '@nestjs/common';
import { CreateTemperaturaDto } from './dto/create-temperatura.dto';
import { UpdateTemperaturaDto } from './dto/update-temperatura.dto';

@Injectable()
export class TemperaturasService {
  create(createTemperaturaDto: CreateTemperaturaDto) {
    return 'This action adds a new temperatura';
  }

  findAll() {
    return `This action returns all temperaturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temperatura`;
  }

  update(id: number, updateTemperaturaDto: UpdateTemperaturaDto) {
    return `This action updates a #${id} temperatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperatura`;
  }
}
