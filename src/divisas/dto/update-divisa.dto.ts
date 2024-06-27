import { PartialType } from '@nestjs/mapped-types';
import { CreateDivisaDto } from './create-divisa.dto';

export class UpdateDivisaDto extends PartialType(CreateDivisaDto) {}
