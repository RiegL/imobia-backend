import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'src/clients/client.entity';

@Injectable()
export class IncomeStatsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async execute() {
    const stats = await this.clientRepository
      .createQueryBuilder('client')
      .select('AVG(client.incomeValue)', 'averageIncome')
      .addSelect('SUM(client.incomeValue)', 'totalIncome')
      .addSelect('MAX(client.incomeValue)', 'maxIncome')
      .addSelect('MIN(client.incomeValue)', 'minIncome')
      .addSelect('COUNT(client.incomeValue)', 'clientsWithIncome')
      .where('client.incomeValue IS NOT NULL')
      .getRawOne();

    return {
      averageIncome: parseFloat(stats.averageIncome),
      totalIncome: parseFloat(stats.totalIncome),
      maxIncome: parseFloat(stats.maxIncome),
      minIncome: parseFloat(stats.minIncome),
      clientsWithIncome: parseInt(stats.clientsWithIncome),
    };
  }
}
