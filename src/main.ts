import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  app.enableCors()

  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`📘 API Documentation available at http://localhost:${port}/api`);
}
bootstrap();
