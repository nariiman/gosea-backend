import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  // Enable CORS
  app.enableCors();

  // ✅ Serve static files from /uploads
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`📘 API Documentation available at http://localhost:${port}/api`);
  console.log(`📁 Uploads are available at http://localhost:${port}/uploads`);
}
bootstrap();
