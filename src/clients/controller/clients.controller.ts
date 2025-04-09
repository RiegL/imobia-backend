import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }


  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.clientsService.remove(id);
  }
}
