import { Module } from '@nestjs/common';
import { ClientsController } from './controller/clients.controller';
import { ClientsService } from './services/clients.service';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsaasModule } from '../asaas/asaas.module';
import { MailModule } from 'src/mail/mail.module';
import { CreateService } from './services/create.service';
import { FindAllService } from './services/findAll.service';
import { FindOneService } from './services/findOne.service';
import { RemoveService } from './services/remove.service';
import { UpdateService } from './services/updata.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), AsaasModule, MailModule],
  controllers: [ClientsController],
  providers: [
    CreateService,
    FindAllService,
    FindOneService,
    RemoveService,
    UpdateService
  ],
})
export class ClientsModule {}
