import React from 'react'
import pokeGif from '../assets/pokeGif.gif'

const PokemonCard = (props) => {    
    var rotation = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);
    console.log(props);
    
    return (
        <div className="col-6  col-sm-10 col-lg-5 w-auto">
            <div className="card text-center mx-auto p-3" style={{transform: `rotate(${rotation}deg)`}}>
                <img className="card-img-top mx-auto" src={props.image} alt="Card image cap" />
                <div className="card-header fw-bolder text-uppercase pokeName">
                    {props.name}
                </div>
                <div className="card-body">
                    <h5 className="pokeType">{props.type}</h5>
                    <table className="table  table-borderless text-center mb-0">
                        <tbody>
                            <tr>
                                <th>HP</th>
                                <td>{props.hp}</td>
                                <th>Speed</th>
                                <td>{props.speed}</td>
                            </tr> 
                            <tr>
                                <th>Attack</th>
                                <td>{props.attack}</td>
                                <th>Especial attack</th>
                                <td>{props.specialAttack}</td>
                            </tr>   
                            <tr>
                                <th>Defense</th>
                                <td>{props.defense}</td>
                                <th>Especial defense</th>
                                <td>{props.specialDefense}</td>
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