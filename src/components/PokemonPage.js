import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [ pokemon, setPokemon ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((pokemonArr) => setPokemon(pokemonArr))
  }, [])

  const submitPokemon = (newPokemon) => {
    fetch(url, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newPokemon)
    })
      .then((r) => r.json())
      .then((newServerPokemon) => setPokemon([...pokemon, newServerPokemon]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submitPokemon={submitPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
