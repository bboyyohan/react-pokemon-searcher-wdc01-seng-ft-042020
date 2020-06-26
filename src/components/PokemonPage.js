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
    // debugger
    this.setState({
      searchInput: e.target.value
    })
  }

  filteredPokemon = (e) => {
    // this.state.pokemonArr.filter(pokemon => pokemon.name.includes(this.state.searchInput))
    fetch(url).then(resp => resp.json()).then(data => this.setState({pokemonArr: data.name}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchPokemon={this.searchPokemon} filteredPokemon={this.filteredPokemon}/>
        <br />
        <PokemonCollection pokemonArr={this.state.pokemonArr}/>
      </Container>
    )
  }
}

export default PokemonPage
