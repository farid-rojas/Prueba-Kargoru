import { Repository } from 'typeorm';
import { Quotes } from '../entities/quotes.entity';
import { createQuotesDto, updateQuotesDto } from "../dtos/quotes.dto";
export declare class QuotesService {
    private quotesRepo;
    constructor(quotesRepo: Repository<Quotes>);
    remove(id: number): Promise<void>;
    create(data: createQuotesDto): Promise<Quotes>;
    findBy(id: number): Promise<Quotes[]>;
    update(id: number, changes: updateQuotesDto): Promise<Quotes>;
}
