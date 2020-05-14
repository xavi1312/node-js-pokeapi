import { model, Schema, Document } from "mongoose";

export interface IPokemon extends Document {
  name: String;
  pokedexNumber: String;
  img: String;
  types: Array<String>;
  evolution?: Number;
  involution?: Number;
  _update?: any;
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

pokemonSchema.pre<IPokemon>("save", function (next) {
  const pokemon = this;
  if (!pokemon.isModified("types")) return next();
  pokemon.types = pokemon.types.map((t: any) => t.trim());
  next();
});

pokemonSchema.pre<IPokemon>("findOneAndUpdate", function (next) {
  const pokemon = this;
  pokemon._update.types = pokemon._update.types.map((t: any) => t.trim());
  next();
});

export default model<IPokemon>("Pokemon", pokemonSchema);
