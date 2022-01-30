/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosController } from './desafios.controller';
import { DesafiosService } from './desafios.service';
import { DesafioSchema } from './interfaces/desafio.schema';
import { JogadoresModule } from 'src/jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desafio', schema: DesafioSchema }]),
    JogadoresModule,
  ],
  controllers: [DesafiosController],
  providers: [DesafiosService],
})
export class DesafiosModule {}
