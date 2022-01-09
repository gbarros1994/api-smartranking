import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    const { email } = criarJogadorDto;

    const jogadorEnontrado = this.jogadores.find(
      (jogador) => jogador.email === email,
    );

    if (jogadorEnontrado) {
      this.atualizar(jogadorEnontrado, criarJogadorDto);
    } else {
      this.criar(criarJogadorDto);
    }
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return await this.jogadores;
  }

  async consultarJogadoresPeloEmail(email: string): Promise<Jogador> {
    const jogadorEnontrado = this.jogadores.find(jogador => jogador.email === email);

    if (!jogadorEnontrado) {
      throw new NotFoundException(`Jogador com e-mail ${email} não encontrado`);
    }

    return jogadorEnontrado;
  }

  async deletarJogador(email): Promise<void> {
    const jogadorEnontrado = this.jogadores.find(jogador => jogador.email === email);

    this.jogadores = this.jogadores.filter(jogador.email !== jogadorEnontrado.email);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criaJogadorDto;

    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }

  private atualizar(
    jogadorEnontrado: Jogador,
    criarJogadorDto: CriarJogadorDto,
  ): void {
    const { nome } = criarJogadorDto;

    jogadorEnontrado.nome = nome;
  }
}
