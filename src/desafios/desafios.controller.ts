/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio } from './interfaces/desafio.interface';

@Controller('api/v1/desafios')
export class DesafiosController {

  constructor(private readonly desafiosService: DesafiosService){}

  @Post()
  async criarDesafio(@Body() criarDesafioDto: CriarDesafioDto) : Promise<Desafio> {
    return await this.desafiosService.criarDesafio(criarDesafioDto);
  }
}
