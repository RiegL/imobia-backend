import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../clients/client.entity';
import { ClientsByCompanyTypeService } from './services/clients-by-company-type.service';
import { IncomeStatsService } from './services/income-stats.service';
import { ClientsPerMonthService } from './services/client-per-month.service';
import { ClientsByCityService } from './services/client-by-city.service';
import { TotalClientsService } from './services/total-clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ReportsController],
  providers: [
    ReportsService,
    ClientsByCompanyTypeService,
    IncomeStatsService,
    ClientsPerMonthService,
    ClientsByCityService,
    TotalClientsService,
  ],
})
export class ReportsModule {}
