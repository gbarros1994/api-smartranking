/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const JogadorSchema = new mongoose.Schema({
  telefoneCelular: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
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