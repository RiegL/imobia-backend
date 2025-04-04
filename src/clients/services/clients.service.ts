import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client.entity';
import { CreateClientDto } from '../dto/create-client.dto';
import { AsaasService } from 'src/asaas/asaas.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly asaasService: AsaasService,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {

    const asaasClient = await this.asaasService.createSubAccount({
      name: createClientDto.name,
      email: createClientDto.email,
      phone: createClientDto.phone,
      cpfCnpj: createClientDto.cpfCnpj,
      postalCode: createClientDto.postalCode,
      address: createClientDto.address,
      addressNumber: createClientDto.addressNumber,
      province: createClientDto.province,
    });

    
    const client = this.clientRepository.create({
      ...createClientDto,
      asaasAccountId: asaasClient.id, // Vincula ao ASAAS
    });

    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async update(id: number, updateClientDto: Partial<CreateClientDto>): Promise<Client> {
    await this.clientRepository.update(id, updateClientDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
