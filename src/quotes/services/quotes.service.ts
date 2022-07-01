import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

import { Quotes } from '../entities/quotes.entity';
import { createQuotesDto, updateQuotesDto } from "../dtos/quotes.dto";
@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quotes) private quotesRepo: Repository<Quotes>,
  ) { }
  async remove(id: number) {
    await this.quotesRepo.delete(id);
  }
  create(data: createQuotesDto) {
    const newQuote = this.quotesRepo.create(data);
    return this.quotesRepo.save(newQuote);
  }
  findBy(id: number) {
    return this.quotesRepo.find({where:{
      document: id
    }});
  }
  async update(id: number, changes: updateQuotesDto) {
    const product = await this.quotesRepo.findOneBy({id});
    this.quotesRepo.merge(product, changes);
    return this.quotesRepo.save(product);
  }
}
