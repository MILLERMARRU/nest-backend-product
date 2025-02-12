import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Añadir prefijo api
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API para gestionar productos en el sistema.')
    .setVersion('1.0')
    .addTag('products', 'Operaciones relacionadas con productos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
