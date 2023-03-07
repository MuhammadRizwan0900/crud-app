import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./user/entities/user.entity";

const service = new ConfigService();

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: service.get<string>('DATABASE_HOST'),
    port: service.get<number>('DATABASE_PORT') || 5432,
    username: service.get<string>('DATABASE_USER'),
    password: service.get<string>('DATABASE_PASSWORD'),
    database: service.get<string>('DATABASE_NAME'),
    // autoLoadEntities: true,
    entities: [User],
    synchronize: true,
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
