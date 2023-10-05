import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix("library")
  // await app.listen(3000);
  await app.listen(process.env.PORT || 3000);
}
// bootstrap();

bootstrap().then(() =>
  console.log(`Application is running on: ${process.env.PORT || 3000}`),
);


