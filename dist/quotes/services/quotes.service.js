"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const quotes_entity_1 = require("../entities/quotes.entity");
let QuotesService = class QuotesService {
    constructor(quotesRepo) {
        this.quotesRepo = quotesRepo;
    }
    async remove(id) {
        await this.quotesRepo.delete(id);
    }
    create(data) {
        const newQuote = this.quotesRepo.create(data);
        return this.quotesRepo.save(newQuote);
    }
    findBy(id) {
        return this.quotesRepo.find({ where: {
                document: id
            } });
    }
    async update(id, changes) {
        const product = await this.quotesRepo.findOneBy({ id });
        this.quotesRepo.merge(product, changes);
        return this.quotesRepo.save(product);
    }
};
QuotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quotes_entity_1.Quotes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuotesService);
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map