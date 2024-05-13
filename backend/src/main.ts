import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService} from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService)
    const port = configService.get('PORT')
    app.useGlobalPipes(new ValidationPipe)
    app.useGlobalInterceptors(new TransformInterceptor()) 
    await app.listen(port);
    console.log(`Application is running on port ${port}`);

}
bootstrap();
