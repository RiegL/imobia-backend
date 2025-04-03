import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';
import { Client } from '../client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client> {
    return this.clientsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: Partial<CreateClientDto>): Promise<Client> {
    return this.clientsService.update(Number(id), updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.clientsService.remove(Number(id));
  }
}
