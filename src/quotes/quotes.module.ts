import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuotesService } from './services/quotes.service';
import { QuotesController } from './controllers/quotes.controller';
import { Quotes } from './entities/quotes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quotes])],
  providers: [QuotesService],
  controllers: [QuotesController],
})
export class QuotesModule {}
