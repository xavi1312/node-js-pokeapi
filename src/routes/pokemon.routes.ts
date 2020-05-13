import Router from "express";
const pokemonRoutes = Router();
import {
  createPokemon,
  updatePokemon,
  deletePokemon,
  getPokemon,
  getPokemons,
  getPokemonsLimit,
} from "../controllers/pokemon.controllers";

// POST
pokemonRoutes.post("/pokemon", createPokemon);

// PUT
pokemonRoutes.put("/pokemon", updatePokemon);

// DELETE
pokemonRoutes.delete("/pokemon/:id", deletePokemon);

// GET
pokemonRoutes.get("/pokemon", getPokemons);
pokemonRoutes.get("/pokemon/:id", getPokemon);
pokemonRoutes.get("/pokemon/limit/:id", getPokemonsLimit);

export default pokemonRoutes;
