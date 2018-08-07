import React, { Component } from 'react';
import { Page } from 'components';
import './HeroDetail.css';

class HeroDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroDetail: {
        id: null,
        name: '',
        realName: '',
        superHeroes: '',
      },
    };

    this.apiURL = 'http://localhost:4000/superHeroes/';
  }

  componentDidMount() {
    const heroId = this.props.match.params.id;
    this.getHeroDetail(heroId);
  }

  getHeroDetail = heroId => {
    fetch(this.apiURL + heroId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          heroDetail: data,
        });
      });
  };

  render() {
    const { heroDetail } = this.state;
    console.log(heroDetail);

    return (
      <Page>
        <div className="hero-detail">
          <img src={`/img/${heroDetail.avatar}`} alt="" />

          <div>
            <span className="hero-name">{heroDetail.name}</span>
            <span>{heroDetail.realName}</span>
            <span>{heroDetail.superPowers}</span>
          </div>
        </div>
      </Page>
    );
  }
}

export default HeroDetail;
