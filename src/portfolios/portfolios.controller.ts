import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PortfolioDto } from './dto/portfolio.dto';
import { Portfolio } from './portfolio.entity';
import { PortfolioService } from './portfolios.service';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly service: PortfolioService) {}

  @Post()
  create(@Body() portfolioDto: PortfolioDto): Promise<Portfolio> {
    return this.service.create(portfolioDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() portfolioDto: PortfolioDto): Promise<Portfolio> {
    return this.service.update(portfolioDto, id);
  }

  @Get()
  findAll(): Promise<Portfolio[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Portfolio> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
