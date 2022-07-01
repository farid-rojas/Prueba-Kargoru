import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { createQuotesDto, updateQuotesDto } from 'quotes/dtos/quotes.dto';
import { QuotesService } from '.././services/quotes.service';

@Controller('api/quotes/')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get(':id')
  findBy(@Param('id' ,ParseIntPipe) id: number) {
    return this.quotesService.findBy(+id);
  }
  @Post('/create')
  create(@Body() body: createQuotesDto) {
    return this.quotesService.create(body);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe)id:number,@Body() payload: updateQuotesDto){
    return this.quotesService.update(+id,payload);
  }
  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number){
    return this.quotesService.remove(+id)
  }

}
