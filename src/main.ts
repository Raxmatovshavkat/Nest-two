import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port=process.env.PORT || 4000
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Nestjs is running on port ${port}`);
  
}
bootstrap();
