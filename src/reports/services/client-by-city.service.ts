import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'src/clients/client.entity';

@Injectable()
export class ClientsByCityService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async execute() {
    const result = await this.clientRepository
    .createQueryBuilder('client')
    .select(['client.province AS city', 'COUNT(*)::int AS total'])
    .where('client.province IS NOT NULL')
    .groupBy('client.province')
    .orderBy('total', 'DESC')
    .getRawMany();

  return result.map((row) => ({
    city: row.city,
    total: row.total,
  }));
  }
}
