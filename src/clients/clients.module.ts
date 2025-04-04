import { Module } from '@nestjs/common';
import { ClientsController } from './controller/clients.controller';
import { ClientsService } from './services/clients.service';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsaasModule } from '../asaas/asaas.module'; 

@Module({
  imports: [TypeOrmModule.forFeature([Client]), AsaasModule], 
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
