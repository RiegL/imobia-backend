import { Module } from '@nestjs/common';
import { ClientsController } from './controller/clients.controller';
import { ClientsService } from './services/clients.service';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsaasModule } from '../asaas/asaas.module'; 
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), AsaasModule, MailModule], 
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
