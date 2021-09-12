import React, { Component } from 'react'
import {LoadingPokemon} from './components/PokemonCard'
import './App.css'
import PokemonsContainer from './components/PokemonsContainer'

export default class App extends Component {

  state = {
    pokemons: '',
    loading: true
  }  

  getPokemon = async () => {
    const id = Math.floor(Math.random()*(152-1))+1;
    const POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}`
    const SPECIES = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    const pokemonResponse = await fetch(POKEMON);
    const pokemonData = await pokemonResponse.json();
    const speciesResponse = await fetch(SPECIES);
    const speciesData = await speciesResponse.json();
    const EVOLUTION_CHAIN = speciesData.evolution_chain.url
    const evolutionResponse = await fetch(EVOLUTION_CHAIN);
    const evolutionData = await evolutionResponse.json();

    let evolutionChain = evolutionData.chain;
    let evoChain = [];

    do {
      evoChain.push({
        "species_name": evolutionChain.species.name
      })
      evolutionChain = evolutionChain['evolves_to'][0];
    } while (!!evolutionChain && evolutionChain.hasOwnProperty('evolves_to'));

    console.log(evoChain);    
    for await (let evo of evoChain) {
      const POKEMON = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.species_name}`);
      const pokeData = await POKEMON.json();
      var img = new Image();
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`;      
      const newPokemon = await {
        name: pokeData.name,
        image: img.src,
        type: pokeData.types[0].type.name,
        hp: pokeData.stats[0].base_stat,
        attack: pokeData.stats[1].base_stat,
        defense: pokeData.stats[2].base_stat,
        specialAttack: pokeData.stats[3].base_stat,
        specialDefense: pokeData.stats[4].base_stat,
        speed: pokeData.stats[5].base_stat
      };      
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon]
      });
    }    

    // Last image loaded
    img.onload = async () => {
      this.setState({loading: false})
    }
  }
  
  componentDidMount() {
    setTimeout(()=>{
      this.getPokemon();
    });    
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="main">
          <h1 className="col-12 text-center pt-4 pt-sm-1 title">Pokemon Generator</h1>
          <div className="container">
            <div className="row">
              <PokemonsContainer getPokemon={this.getPokemon} pokemonList={this.state} />
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container-fluid bg-white">
          <div className="row">
            <LoadingPokemon />
          </div>
        </div>
      )
    }
  }
}

