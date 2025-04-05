import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'src/clients/client.entity';

@Injectable()
export class ClientsByCompanyTypeService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async execute() {
    const clients = await this.clientRepository.find();

    const counts: Record<string, number> = {};
    for (const client of clients) {
      const type = client.companyType || 'Não informado';
      counts[type] = (counts[type] || 0) + 1;
    }

    return counts;
  }
}
