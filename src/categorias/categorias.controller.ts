/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService){}

  // CADASTRAR CATEGORIAS
  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(@Body() criarCategoriaDto: CriarCategoriaDto) : Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCategoriaDto);
  }

  // CONSULTAR TODAS CATEGORIAS
  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  // CONSULTAR CATEGORIA POR ID
  @Get('/:categoria')
  async consultarCategoriaPeloId(@Param('categoria') categoria: string): Promise<Categoria> {
    return await this.categoriasService.consultarCategoriaPeloId(categoria);
  }

  // ATUALIZAR CATEGORIA
  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
    @Param('categoria') categoria: string): Promise<void> {

      await this.categoriasService.atualizarCategoria(categoria, atualizarCategoriaDto);
  }

  // ATRIBUIR CATEGORIA A UM JOGADOR
  @Post('/:categoria/jogadores/idJogador')
  async atribuirCategoriaJogador(
    @Param() params: string[]): Promise<void> {
      console.log(params)
    return await this.categoriasService.atribuirCategoriaJogador(params);
  }
}
