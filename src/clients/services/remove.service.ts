import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client.entity';
import { FindOneService } from './findOne.service';


@Injectable()
export class RemoveService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly findOne: FindOneService,
  ) {}


  async remove(id: number): Promise<void> {
    const client = await this.findOne.execute(id);
    if (!client) throw new NotFoundException('Cliente não encontrado');
    await this.clientRepository.delete(id);
  }
}
