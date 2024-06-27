import { Module } from '@nestjs/common';
import { TemperaturasService } from './temperaturas.service';
import { TemperaturasController } from './temperaturas.controller';

@Module({
  controllers: [TemperaturasController],
  providers: [TemperaturasService],
})
export class TemperaturasModule {}
