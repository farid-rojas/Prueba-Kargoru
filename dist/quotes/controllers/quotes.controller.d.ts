import { createQuotesDto, updateQuotesDto } from 'quotes/dtos/quotes.dto';
import { QuotesService } from '.././services/quotes.service';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    findBy(id: number): Promise<import("../entities/quotes.entity").Quotes[]>;
    create(body: createQuotesDto): Promise<import("../entities/quotes.entity").Quotes>;
    update(id: number, payload: updateQuotesDto): Promise<import("../entities/quotes.entity").Quotes>;
    delete(id: number): Promise<void>;
}
