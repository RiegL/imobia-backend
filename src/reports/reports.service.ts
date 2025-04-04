import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../clients/client.entity';
import { Repository } from 'typeorm';
import { ClientsByCompanyTypeService } from './services/clients-by-company-type.service';
import { IncomeStatsService } from './services/income-stats.service';
import { ClientsPerMonthService } from './services/client-per-month.service';
import { ClientsByCityService } from './services/client-by-city.service';
import { TotalClientsService } from './services/total-clients.service';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly clientsByCompanyTypeService: ClientsByCompanyTypeService,
    private readonly incomeStats : IncomeStatsService,
    private readonly clientPerMonth : ClientsPerMonthService,
    private readonly clientsByCity : ClientsByCityService,
    private readonly totalClients: TotalClientsService
  ) {}

  getClientsByCompanyType() {
    return this.clientsByCompanyTypeService.execute();
  }

  getIncomeStats(){
    return this.incomeStats.execute();
  }

  async getClientsPerMonth() {
   return this.clientPerMonth.execute();
  }

  async getClientsByCity() {
    return this.clientsByCity.execute();
  }

  async getTotalClients() {
    return this.totalClients.execute();
  }
  

}
