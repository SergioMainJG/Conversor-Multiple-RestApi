import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './common/config/env.config';
import { DivisasModule } from './divisas/divisas.module';
import { CriptomonedasModule } from './criptomonedas/criptomonedas.module';
import { TemperaturasModule } from './temperaturas/temperaturas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      envFilePath: ['./.env.dev']
    }),
    DivisasModule,
    CommonModule,
    CriptomonedasModule,
    TemperaturasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
