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
  try {
    const pokemon = await Pokemon.findOne({ name: req.body.name });
    if (pokemon)
      return res.status(400).json({ msg: "The pokemon already exists" });
  } catch (error) {
    return res.status(400).json(error);
  }

  const newPokemon = new Pokemon(req.body);
  try {
    newPokemon.save();
  } catch (error) {
    return res.status(400).json(error);
  }

  return res.status(201).send(newPokemon);
};

// PUT
export const updatePokemon = async (req: Request, res: Response) => {
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

  try {
    const pokemonUpdated = await Pokemon.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(pokemonUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// DELETE
export const deletePokemon = async (req: Request, res: Response) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon)
      return res.status(400).json({ msg: "The pokemon does not exist" });
  } catch (error) {
    return res.status(400).json(error);
  }

  try {
    await Pokemon.deleteOne({ _id: req.params.id });
  } catch (error) {
    return res.status(400).json(error);
  }

  return res.status(200).send({ msg: "Pokemon deleted satisfactorily" });
};

// GET
export const getPokemons = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find({});
    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(400).json(error);
  }
};
export const getPokemon = async (req: Request, res: Response) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon)
      return res.status(400).json({ msg: "The pokemon does not exist" });

    return res.status(200).send(pokemon);
  } catch (error) {
    return res.status(400).json(error);
  }
};
export const getPokemonsLimit = (req: Request, res: Response) => {
  res.send("Get multiple pokemon (limit) pokemons");
};
