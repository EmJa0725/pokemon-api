import React, { Component } from 'react'
import {PokemonCard,LoadingPokemon} from './components/PokemonCard'

export default class App extends Component {

  state = {
    name: '',
    image: '',
    hp: '',
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
      console.log('hola')
      this.setState({
        name: data.name,
        image: img.src,
        loading: false
      });      
    }    
  }
  
  componentDidMount() {
    setTimeout(()=>{
      this.getPokemon();
    },2000);    
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
        <div>
          <LoadingPokemon />
        </div>
      )
    }
  }
}

