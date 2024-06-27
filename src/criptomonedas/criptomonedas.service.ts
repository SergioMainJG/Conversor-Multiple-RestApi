import { Injectable } from '@nestjs/common';
import { CreateCriptomonedaDto } from './dto/create-criptomoneda.dto';
import { UpdateCriptomonedaDto } from './dto/update-criptomoneda.dto';

@Injectable()
export class CriptomonedasService {
  create(createCriptomonedaDto: CreateCriptomonedaDto) {
    return 'This action adds a new criptomoneda';
  }

  findAll() {
    return `This action returns all criptomonedas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criptomoneda`;
  }

  update(id: number, updateCriptomonedaDto: UpdateCriptomonedaDto) {
    return `This action updates a #${id} criptomoneda`;
  }

  remove(id: number) {
    return `This action removes a #${id} criptomoneda`;
  }
}
