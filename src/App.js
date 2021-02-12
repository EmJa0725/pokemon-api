import React, { Component } from 'react'
import {PokemonCard,LoadingPokemon} from './components/PokemonCard'
import './App.css'

export default class App extends Component {

  state = {
    name: '',
    image: '',
    type: '',
    hp: '',
    attack: '',
    defense: '',
    specialAttack: '',
    specialDefense: '',
    speed: '',
    loading: true
  };

  getPokemon = async (e) => {
    console.log('Loading...')
    const id = Math.floor(Math.random()*(152-1))+1;
    const POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}`
    const SPECIES = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    const pokemonResponse = await fetch(POKEMON);
    const pokemonData = await pokemonResponse.json();
    const speciesResponse = await fetch(SPECIES);
    const speciesData = await speciesResponse.json();

    // if (pokemonData.name === pokemonData2.)
    // fetch evolution chain
    const EVOLUTION_CHAIN = speciesData.evolution_chain.url
    const evolutionResponse = await fetch(EVOLUTION_CHAIN);
    const evolutionData = await evolutionResponse.json();

    var evolutionChain = evolutionData.chain;

    var evoChain = [];

    do {
      evoChain.push({
        "species_name": evolutionChain.species.name
      })
      evolutionChain = evolutionChain['evolves_to'][0];
    } while (!!evolutionChain && evolutionChain.hasOwnProperty('evolves_to'));

    console.log(evoChain);
    // console.log(pokemonData);
    // console.log(evolutionData);
    // console.log(evolutionChain.evolves_to);

    var img = new Image();
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
    img.onload = () => {
      this.setState({
        name: pokemonData.name,
        image: img.src,
        type: pokemonData.types[0].type.name,
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defense: pokemonData.stats[2].base_stat,
        specialAttack: pokemonData.stats[3].base_stat,
        specialDefense: pokemonData.stats[4].base_stat,
        speed: pokemonData.stats[5].base_stat,
        loading: false
      });      
    }    
  }
  
  componentDidMount() {
    setTimeout(()=>{
      this.getPokemon();
    },1000);    
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="main">
          <h1 className="col-12 text-center pt-4 title">Pokemon Generator</h1>
          <div className="container">
            <div className="row">
              <PokemonCard
                getPokemon={this.getPokemon}
                {...this.state}
              />
            </div>
          </div>
        </div>
      )
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

