import { PartialType } from '@nestjs/mapped-types';
import { CreateTemperaturaDto } from './create-temperatura.dto';

export class UpdateTemperaturaDto extends PartialType(CreateTemperaturaDto) {}
