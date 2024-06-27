import { Module } from '@nestjs/common';
import { CriptomonedasService } from './criptomonedas.service';
import { CriptomonedasController } from './criptomonedas.controller';

@Module({
  controllers: [CriptomonedasController],
  providers: [CriptomonedasService],
})
export class CriptomonedasModule {}
