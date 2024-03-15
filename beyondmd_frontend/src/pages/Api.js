import React from "react";
import './Api.css';
import MediaCard from "../components/Card/Card";
import DeletePokeButton from "../components/DeletePokeButton/DeletePokeButton";
import GetPokemon from "../components/GetPokemon/GetPokemon";

// Page that the API data is displayed on

function Api() {

  return (
    <div className="Api">
        <h1 className="apitext">Random Pokemon for every refresh!</h1>
        {/* Adds the MediaCard from Card.js */}
        <MediaCard />
        {/* Adds the button that calls DeletePokeButton() on click */}
        <DeletePokeButton className='button' />
        {/* Displays the Pokemon from GetPokemon.js */}
        <GetPokemon />
    </div>
  );
}

export default Api;