const POKEMONS_DATA_API =
  "https://6201203afdf5090017249856.mockapi.io/api/v1/pokemon-details/pokemon";

const POKEMON_DATA_BY_NAME_API = "https://pokeapi.co/api/v2/pokemon/";

const NAVBAR_LIST = {
  Home: "/",
  Pokédex: "/pokedex",
  Legendaries: "/legendaries",
  Documentation: "/documentation",
};

const TYPE_FILTER_OPTIONS = [
  "bug",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "glass",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const RANGE_FILTER_HEADINGS = ["Attack", "Experience"];

export {
  NAVBAR_LIST,
  POKEMON_DATA_BY_NAME_API,
  POKEMONS_DATA_API,
  RANGE_FILTER_HEADINGS,
  TYPE_FILTER_OPTIONS,
};
