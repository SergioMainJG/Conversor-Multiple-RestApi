import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
  console.log(`¡Api start! Running on port: ${process.env.PORT} `);
}
bootstrap();
