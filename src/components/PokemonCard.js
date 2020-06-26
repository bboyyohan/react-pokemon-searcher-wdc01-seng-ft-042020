import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor(props){
    super(props)
    console.log(this.props.pokemon)
    this.state = {
      flip: this.props.pokemon.sprites.front
    }
  }

  flipPokemon = () => {
    if (this.state.flip !== this.props.pokemon.sprites.front) {
      this.setState({
        flip: this.props.pokemon.sprites.front
      })
    } else {
      this.setState({
        flip: this.props.pokemon.sprites.back
      })
    }
  }
  render() {
    // console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipPokemon} >
            <img src={this.state.flip} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
