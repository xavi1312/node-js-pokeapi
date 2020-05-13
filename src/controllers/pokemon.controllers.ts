import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

// POST
export const createPokemon = (req: Request, res: Response) => {
  res.send("Crete a new pokemon");
};

// PUT
export const updatePokemon = (req: Request, res: Response) => {
  res.send("Update specific pokemon");
};

// DELETE
export const deletePokemon = (req: Request, res: Response) => {
  res.send("Delete specific pokemon");
};

// GET
export const getPokemons = (req: Request, res: Response) => {
  res.send("Get all pokemons");
};
export const getPokemon = (req: Request, res: Response) => {
  res.send("Get specific pokemon");
};
export const getPokemonsLimit = (req: Request, res: Response) => {
  res.send("Get multiple pokemon (limit) pokemons");
};
