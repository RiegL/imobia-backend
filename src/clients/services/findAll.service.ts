import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client.entity';


@Injectable()
export class FindAllService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}


  async execute(): Promise<Client[]> {
    return this.clientRepository.find();
  }
}
