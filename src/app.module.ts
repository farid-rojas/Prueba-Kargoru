import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pruebas',
      password: 'Pruebas@2022',
      database: 'Prueba',
      entities: ['dist/**/*.entity{.ts, js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
      autoLoadEntities: true,
    }),
    QuotesModule,
  ],
})
export class AppModule {}
