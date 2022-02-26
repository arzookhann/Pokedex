import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Footer from "../../components/footer/Footer";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";
import ModalCard from "../../components/modal-card/ModalCard";
import FilterCheckbox from "../../components/filters/FilterCheckbox";
import FilterRange from "../../components/filters/FilterRange";
import DropdownFilterBox from "../../components/filters/FiltersDropdown";
import Overlay from "../../components/overlay/Overlay";
import Loading from "../../components/loading/Loading";

import { reduceAPIData, reduceModalAPIData } from "../../utils/functions";
import {
  POKEMONS_DATA_API,
  POKEMON_DATA_BY_NAME_API,
  TYPE_FILTER_OPTIONS,
} from "../../utils/constants";

import "./pokedex-styles.scss";

const Pokedex = () => {
  const [clickedCardDetails, setClickedCardDetails] = useState(null);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [pokemonsDataForRender, setPokemonsDataForRender] = useState([]);
  const [pokemonModalData, setPokemonModalData] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const navigate = useNavigate();

  const fetchPokemons = async () => {
    try {
      let response = await axios.get(POKEMONS_DATA_API);
      response = reduceAPIData(response.data);
      setPokemonsDataForRender(response);
      setPokemonsData(response);
    } catch (error) {
      navigate("/error", { replace: true });
    }
  };

  const fetchPokemonDataForModal = async (pokemon) => {
    try {
      const response = await axios.get(
        `${POKEMON_DATA_BY_NAME_API}${pokemon.name}`
      );
      setPokemonModalData(
        reduceModalAPIData({ ...response.data, image: pokemon.image })
      );
    } catch (error) {
      navigate("/error", { replace: true });
    }
  };

  const removeActiveClass = () => setIsModalActive(false);
  const selectComponent = (name, image) => {
    setIsModalActive(true);
    setClickedCardDetails({ name: name.toLowerCase(), image });
  };

  const handleInputChange = (event) => {
    if (event.target.value) {
      setPokemonsDataForRender(
        pokemonsData.filter((data) =>
          data.title.toLowerCase().startsWith(event.target.value.toLowerCase())
        )
      );
    } else {
      setPokemonsDataForRender(pokemonsData);
    }
  };

  useEffect(fetchPokemons, []);

  useEffect(() => {
    isModalActive && (document.body.style.overflow = "hidden");
    !isModalActive && (document.body.style.overflow = "unset");
    isModalActive &&
      clickedCardDetails.name &&
      fetchPokemonDataForModal(clickedCardDetails);
    return () => setClickedCardDetails(null);
  }, [isModalActive]);

  return (
    <>
      <div className="pokedex">
        <div className="pokedex-gallery">
          <h1 className="pokedex-heading">
            800 <span className="text-bold">Pokémon</span> for you to choose
            your favorite
          </h1>
          <Input
            onClick={handleInputChange}
            placeholder="Find your Pokémon..."
          />

          <div className="filters-container">
            <div className="filter">
              <FilterCheckbox heading="Type" options={TYPE_FILTER_OPTIONS} />
            </div>
            <div className="filter">
              <FilterRange heading="Attack" />
            </div>
            <div className="filter">
              <FilterRange heading="Experience" />
            </div>
          </div>
          <div className="dropdown-filter-container">
            <DropdownFilterBox options={TYPE_FILTER_OPTIONS} />
          </div>

          <div className="cards-container">
            {pokemonsDataForRender.length ? (
              pokemonsDataForRender.map((pokemon) => (
                <Card
                  {...{
                    ...pokemon,
                    key: pokemon.title,
                    onClick: () => {
                      selectComponent(pokemon.title, pokemon.image);
                    },
                  }}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>

          <div className={`modal-card ${isModalActive ? "active" : ""}`}>
            <label onClick={removeActiveClass} id="close-icon">
              <i className="fa fa-close fa-2x" />
            </label>
            <ModalCard {...pokemonModalData} />
          </div>
        </div>
        <Footer />
      </div>
      <Overlay
        onClick={removeActiveClass}
        className={isModalActive ? "active" : ""}
      />
    </>
  );
};

export default Pokedex;
