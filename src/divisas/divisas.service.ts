import { Injectable } from '@nestjs/common';
import { CreateDivisaDto } from './dto/create-divisa.dto';
import { UpdateDivisaDto } from './dto/update-divisa.dto';

@Injectable()
export class DivisasService {
  
  create(createDivisaDto: CreateDivisaDto) {
    return 'This action adds a new divisa';
  }

  findAll() {
    return `This action returns all divisas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} divisa`;
  }

  update(id: number, updateDivisaDto: UpdateDivisaDto) {
    return `This action updates a #${id} divisa`;
  }

  remove(id: number) {
    return `This action removes a #${id} divisa`;
  }
}
