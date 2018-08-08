import React, { Component } from 'react';
import { Page } from 'components';
import './UpdateHero.css';

class UpdateHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      realName: '',
      superPowers: '',
    };

    this.apiURL = 'http://localhost:4000/superHeroes/';
    this.heroId = this.props.match.params.id;
  }

  componentDidMount() {
    this.getUpdateHero(this.heroId);
  }

  getUpdateHero = heroId => {
    fetch(this.apiURL + heroId)
      .then(res => res.json())
      .then(data => {
        this.setState(data);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = this.state;

    fetch(this.apiURL + this.heroId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => {
      this.props.history.push('/');
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { name, realName, superPowers, avatar } = this.state;

    return (
      <Page>
        <button class="back-button" onClick={this.goBack}>
          <span>←</span> Back to Superheroes
        </button>

        <h2 className="add-hero-title">Update superhero</h2>

        <form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name" className="for">
                Hero Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="realName" className="for">
                Real Name
              </label>
              <input
                type="text"
                name="realName"
                id="realName"
                value={realName}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="superPowers">Super Powers</label>
              <input
                type="text"
                name="superPowers"
                id="superPowers"
                value={superPowers}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar" id="avatar" onChange={this.handleChange}>
                Avatar
              </label>
              <input
                type="text"
                name="avatar"
                id="avatar"
                value={avatar}
                onChange={this.handleChange}
                required
              />
            </div>

            <button onClick={this.onSubmit} className="submit-button">
              <span>Update</span>
            </button>
          </div>
        </form>
      </Page>
    );
  }
}

export default UpdateHero;
