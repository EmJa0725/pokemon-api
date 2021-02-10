import React from 'react'
import pokeGif from '../assets/pokeGif.gif'

const PokemonCard = (props) => {    
    console.log(props);
    return (
        <div className="col-md-5 mx-auto">
            <div className="card text-center w-75 mx-auto p-3">
                <img className="card-img-top mx-auto" src={props.image} alt="Card image cap" />
                <div className="card-header fw-bolder text-uppercase pokeName">
                    {props.name}
                </div>
                <div className="card-body">
                    <table className="table  table-borderless text-center">
                        <tbody>
                            <tr>
                                <th>HP</th>
                                <td>{props.hp}</td>
                            </tr> 
                            <tr>
                                <th>Attack</th>
                                <td>{props.attack}</td>
                            </tr>   
                            <tr>
                                <th>Defense</th>
                                <td>{props.defense}</td>
                            </tr>                              
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

const LoadingPokemon = (props) => {
    return (
        <div className="col-12">
            <div className="text-center">
                <img src={pokeGif} height={300} width={400} alt="loading..." />
            </div>
        </div>
    )
};


export {PokemonCard, LoadingPokemon};