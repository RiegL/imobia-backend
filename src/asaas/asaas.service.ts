import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AsaasService {
  private readonly apiUrl = 'https://api.asaas.com/';
  private readonly apiKey = process.env.ASAAS_API_KEY; 

  async createSubAccount(data: any): Promise<any> {
    console.log('Enviando token:', this.apiKey); 

    try {
      const response = await axios.post(this.apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar subconta no ASAAS:', error.response?.data || error.message);
      throw new Error('Erro ao criar subconta no ASAAS');
    }
  }
}
