import { model, Schema, Document } from "mongoose";

interface IPokemon extends Document {
  name: String;
  pokedexNumber: String;
  img: String;
  types: Array<String>;
  evolution?: Number;
  involution?: Number;
}

const pokemonSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  pokedexNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  types: {
    type: Array,
    required: true,
  },
  evolution: {
    type: String,
    required: false,
    trim: true,
  },
  involution: {
    type: String,
    required: false,
    trim: true,
  },
});

export default model<IPokemon>("Pokemon", pokemonSchema);
