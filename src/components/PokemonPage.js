import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


const url = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state={
      searchInput: "",
      pokemonArr: []
    }
  }

  componentDidMount() {
    fetch(url).then(res => res.json()).then(pokemonData => this.setState({pokemonArr: pokemonData}))
  }


  searchPokemon = (e) => {
    debugger
    // this.setState({
    //   searchInput: e.
    // })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonArr={this.state.pokemonArr}/>
      </Container>
    )
  }
}

export default PokemonPage
