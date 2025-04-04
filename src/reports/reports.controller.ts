import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('clients/report')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('company-types')
  async getClientsByCompanyType() {
    return this.reportsService.getClientsByCompanyType();
  }

  @Get('income-stats')
  async getIncomeStats() {
    const average = await this.reportsService.getIncomeStats();
    return { averageIncome: average };
  }

  @Get('clients-per-month')
  async getClientsPerMonth() {
    return this.reportsService.getClientsPerMonth();
  }

  @Get('clients-by-city')
  async getClientsByCity() {
    return this.reportsService.getClientsByCity();
  }

  @Get('total-clients')
  getTotalClients() {
    return this.reportsService.getTotalClients();
  }
}
