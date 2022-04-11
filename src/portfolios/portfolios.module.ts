import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './portfolio.entity';
import { PortfoliosController } from './portfolios.controller';
import { PortfolioService } from './portfolios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio])],
  providers: [PortfolioService],
  controllers: [PortfoliosController],
})
export class PortfoliosModule {}
