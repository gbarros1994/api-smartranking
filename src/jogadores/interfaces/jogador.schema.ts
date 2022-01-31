/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const JogadorSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  telefoneCelular: {
    type: String,
  },
  nome: {
    type: String
  },
  ranking: {
    type: String
  },
  posicaoRanking: {
    type: Number
  }
}, { timestamps: true, collection: 'jogadores' });