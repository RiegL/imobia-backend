import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'src/clients/client.entity';

@Injectable()
export class ClientsPerMonthService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async execute() {
    const result = await this.clientRepository
      .createQueryBuilder('client')
      .select([
        "TO_CHAR(client.createdAt, 'YYYY-MM') AS month",
        'COUNT(*)::int AS total',
      ])
      .groupBy('month')
      .orderBy('month', 'ASC')
      .getRawMany();

    return result.map((row) => ({
      month: row.month,
      total: row.total,
    }));
  }
}
