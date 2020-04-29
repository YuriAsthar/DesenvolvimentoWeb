import { Schema, model } from 'mongoose';

const HotelSchema = new Schema({
    nome: String,
    uf: String,
    municipio: String,
    endereco: String,
    qtdeAptos: Number,
    valorDiaria: Number,
});

export default model('Hotel', HotelSchema);
