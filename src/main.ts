import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 2022.12.28 nest study start
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
