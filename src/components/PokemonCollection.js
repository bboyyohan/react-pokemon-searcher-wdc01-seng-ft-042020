import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.pokemonArr)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokemonArr.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />
       )}

      </Card.Group>
    )
  }
}

export default PokemonCollection
