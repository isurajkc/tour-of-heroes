import React, { Component } from 'react';
import { Page, HeroList, HeroSearch } from 'components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      searchedHeroes: [],
      searchKeyWord: '',
    };

    this.apiURL = 'http://localhost:4000/superHeroes/';
  }

  componentDidMount() {
    this.getMockHeroData();
  }

  getMockHeroData = () => {
    fetch(this.apiURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          heroes: data,
          searchedHeroes: data,
        });
      });
  };

  onHeroSearch = e => {
    const value = e.target.value;
    let searchedHeroes = this.state.heroes;
    console.log(value);

    searchedHeroes = searchedHeroes.filter(hero => {
      const name = hero.name.toLowerCase();
      return name.match(value.toLowerCase());
    });

    this.setState({
      searchedHeroes: searchedHeroes,
      searchKeyWord: e.target.value,
    });
  };

  handleDelete = heroId => {
    fetch(this.apiURL + heroId, { method: 'DELETE' });
    const heroes = this.state.heroes;
    const position = heroes.findIndex(hero => heroId === hero.id);
    heroes.splice(position, 1);
    this.setState({ heroes });
  };

  render() {
    const { searchedHeroes, searchKeyWord } = this.state;

    return (
      <Page>
        <HeroSearch value={searchKeyWord} onSearch={this.onHeroSearch} />
        <HeroList heroes={searchedHeroes} deleteHero={this.handleDelete} />
      </Page>
    );
  }
}

export default Home;
