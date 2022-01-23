/* eslint-disable prettier/prettier */

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categoria } from './interfaces/categoria.interface';
import { Model } from 'mongoose';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';

@Injectable()
export class CategoriasService {

  constructor(@InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>) {}
    
    async criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
      const { categoria } = criarCategoriaDto;

      const categoriaEncontrada = await this.categoriaModel.find({categoria}).exec();

      if (categoriaEncontrada) {
        throw new BadRequestException(`Categoria ${categoria} já cadastrada!`)
      }

      const categoriaCriada = new this.categoriaModel(criarCategoriaDto);
      return await categoriaCriada.save();
    }
}
