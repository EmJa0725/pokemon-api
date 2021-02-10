import React, { Component } from 'react'
import {PokemonCard,LoadingPokemon} from './components/PokemonCard'
import './App.css'

export default class App extends Component {

  state = {
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    loading: true
  };

  getPokemon = async (e) => {
    console.log('Loading...')
    const id = Math.floor(Math.random()*(152-1))+1;
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);

    var img = new Image();
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    img.onload = () => {
      this.setState({
        name: data.name,
        image: img.src,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
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
        <div className="container">
          <div className="row">
            <PokemonCard
              getPokemon={this.getPokemon}
              {...this.state}
            />
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

