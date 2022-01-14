import * as mongoose from 'mongoose';
/* eslint-disable prettier/prettier */

export const JogadorSchema = new mongoose.Schema({
  telefoneCelular: {
    type: String,
    unique: true,
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