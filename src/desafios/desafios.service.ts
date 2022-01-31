/* eslint-disable prettier/prettier */

import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Desafio } from './interfaces/desafio.interface';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CategoriasService } from 'src/categorias/categorias.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { DesafioStatus } from './interfaces/desafio-status.enum';


@Injectable()
export class DesafiosService {

  constructor(@InjectModel('Desafio') private readonly desafioModel: Model<Desafio>,
  private readonly jogadoresService: JogadoresService,
  private readonly categoriaService: CategoriasService) {}

  

  async criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<Desafio> {

    const jogadores =  await this.jogadoresService.consultarTodosJogadores();

    Logger.log('teste');

    criarDesafioDto.jogadores.map(jogadorDto => {
      const jogadorFilter = jogadores.filter(jogador => jogador._id == jogadorDto.id)

      if (jogadorFilter.length == 0) {
        throw new BadRequestException('Não é um jogador');
      }
    })

    const solicitanteJogadorPartida = await criarDesafioDto.jogadores.filter(jogador => jogador._id == criarDesafioDto)

    if (!solicitanteJogadorPartida) {
      throw new BadRequestException(`O solicitante deve ser um jogador`);
    }

    const categoriaDoJogador = await this.categoriaService.consultarCategoriaDoJogador('1');

    if (!categoriaDoJogador) {
      throw new BadRequestException(`O solicitante precisa estar registrado em uma categoria ${categoriaDoJogador}`)
    }

    const desafioCriado = new this.desafioModel(criarDesafioDto);
    desafioCriado.categoria = categoriaDoJogador.categoria;
    desafioCriado.dataHoraSolicitacao = new Date()

    desafioCriado.status = DesafioStatus.PENDENTE;
    return await desafioCriado.save();
  }
}
