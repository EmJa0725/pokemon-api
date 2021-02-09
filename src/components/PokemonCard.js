import React from 'react'
import pokeGif from '../assets/pokeGif.gif'

const PokemonCard = (props) => {    
    console.log(props);
    return (
        <div className="col-md-6 mx-auto p-4">
            <div className="card text-center">
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                <div className="card-header">
                    {props.name}
                </div>
                <div className="card-body">
                </div>
            </div>
        </div>
    )
};

const LoadingPokemon = (props) => {
    return (
        <div className="container">
            <div className="row ">
                <div className="text-center">
                    <img src={pokeGif} height={300} width={400} alt="loading..." />
                </div>
            </div>
        </div>
    )
};


export {PokemonCard, LoadingPokemon};