import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';


import { CreateService } from '../services/create.service';
import { FindAllService } from '../services/findAll.service';
import { FindOneService } from '../services/findOne.service';
import { RemoveService } from '../services/remove.service';
import { UpdateService } from '../services/updata.service';


@Controller('clients')
export class ClientsController {
  constructor(

    private readonly createService: CreateService,
    private readonly findAllService: FindAllService,
    private readonly findOneService: FindOneService,
    private readonly removeService: RemoveService,
    private readonly UpdateService: UpdateService
  ) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return this.createService.execute(createClientDto);
  }

  @Get()
  async findAll() {
    return this.findAllService.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.findOneService.execute(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.removeService.remove(id);
  }
}
