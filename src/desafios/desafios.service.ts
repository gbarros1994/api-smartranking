/* eslint-disable prettier/prettier */

import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CriarCategoriaDto } from 'src/categorias/dtos/criar-categoria.dto';
import { Desafio } from './interfaces/desafio.interface';
import { JogadoresService } from 'src/jogadores/jogadores.service';


@Injectable()
export class DesafiosService {

  constructor(@InjectModel('Desafio') private readonly desafioModel: Model<Desafio>) {}

  async criarDesafio(criarDesafioDto: CriarCategoriaDto): Promise<Desafio> {

    // VALIDAR JOGADOR

  }
}
