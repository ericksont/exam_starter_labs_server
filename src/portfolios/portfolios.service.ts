import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PortfolioDto } from './dto/portfolio.dto';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly repository: Repository<Portfolio>,
  ) {}

  create(dto: PortfolioDto): Promise<Portfolio> {
    const portfolio = new Portfolio();
    portfolio.tokenId = dto.tokenId;
    portfolio.tokenSymbol = dto.tokenSymbol;
    portfolio.amount = dto.amount;
    return this.repository.save(portfolio);
  }

  async update(dto: PortfolioDto, id: number): Promise<Portfolio> {
    const portfolio = new Portfolio();
    portfolio.tokenId = dto.tokenId;
    portfolio.tokenSymbol = dto.tokenSymbol;
    portfolio.amount = dto.amount;
    await  this.repository.update(id,portfolio);
    return await this.repository.findOne(id);

  }

  async findAll(): Promise<Portfolio[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Portfolio> {
    return this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
