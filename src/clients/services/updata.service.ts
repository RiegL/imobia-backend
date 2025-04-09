import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client.entity';
import { CreateClientDto } from '../dto/create-client.dto';
import { FindOneService } from './findOne.service';


@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly findOne: FindOneService,
  ) {}

  async update(
    id: number,
    updateClientDto: Partial<CreateClientDto>,
  ): Promise<Client> {
    const client = await this.findOne.execute(id);
    if (!client) throw new NotFoundException('Cliente não encontrado');
    await this.clientRepository.update(id, updateClientDto);
    return this.findOne.execute(id);
  }

}
