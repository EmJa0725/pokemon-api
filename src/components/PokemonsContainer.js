import React, { Component } from 'react'
import PokemonCard from './PokemonCard'


export default class PokemonsContainer extends Component {
    render() {
        let pokemon = this.props.pokemonList.pokemons;
        return pokemon.map(pokemon =>
            <PokemonCard 
                name={pokemon.name}
                image={pokemon.image} 
                type={pokemon.type}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                specialAttack={pokemon.specialAttack}
                specialDefense={pokemon.specialDefense}     
                speed={pokemon.speed}
            />
        );
    }
}
