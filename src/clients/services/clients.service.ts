import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client.entity';
import { CreateClientDto } from '../dto/create-client.dto';
import { AsaasService } from 'src/asaas/asaas.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly asaasService: AsaasService,
    private readonly mailService: MailService
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const asaasClient = await this.asaasService.createSubAccount({
      name: createClientDto.name,
      email: createClientDto.email,
      cpfCnpj: createClientDto.cpfCnpj,
      mobilePhone: createClientDto.mobilePhone,
      incomeValue: createClientDto.incomeValue,
      address: createClientDto.address,
      addressNumber: createClientDto.addressNumber,
      province: createClientDto.province,
      postalCode: createClientDto.postalCode,
      birthDate: createClientDto.birthDate,
      companyType: createClientDto.companyType,
    });

    const client = this.clientRepository.create({
      ...createClientDto,
      asaasAccountId: asaasClient.id,
    });

    const savedClient = await this.clientRepository.save(client);

    // 👇 Aqui é onde você coloca o envio de e-mail com delay de 30 minutos:
    setTimeout(
      () => {
        this.mailService.sendWelcomeEmail(savedClient.email, savedClient.name);
      },
      30 * 60 * 1000,
      // 1 * 60 * 1000
    ); 

    return savedClient;
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateClientDto: Partial<CreateClientDto>,
  ): Promise<Client> {
    const client = await this.findOne(id);
    if (!client) throw new NotFoundException('Cliente não encontrado');
    await this.clientRepository.update(id, updateClientDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const client = await this.findOne(id);
    if (!client) throw new NotFoundException('Cliente não encontrado');
    await this.clientRepository.delete(id);
  }
}
