import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

// POST
export const createPokemon = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.pokedexNumber ||
    !req.body.img ||
    !req.body.types
  ) {
    return res.status(400).json({
      msg:
        "Please send pokemon name, pokedex number, pokemon image and pokemon types",
    });
  }

  const pokemon = await Pokemon.findOne({ name: req.body.name });
  if (pokemon)
    return res.status(400).json({ msg: "The pokemon already exists" });

  const newPokemon = new Pokemon(req.body);
  newPokemon.save();

  return res.status(201).send(newPokemon);
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
