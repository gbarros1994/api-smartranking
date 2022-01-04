import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/vi/jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador(@Body() CriarJogadorDto: CriarJogadorDto) {
    const { email } = CriarJogadorDto;
    return JSON.stringify({
      nome: email,
    });
  }
}
