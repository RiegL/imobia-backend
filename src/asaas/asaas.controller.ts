import { Controller, Post, Body } from '@nestjs/common';
import { AsaasService } from './asaas.service';

@Controller('asaas')
export class AsaasController {
  constructor(private readonly asaasService: AsaasService) {}

  @Post('subaccount')
  async criarSubconta(@Body() dadosSubconta: any) {
    return this.asaasService.createSubAccount(dadosSubconta);
  }
}
