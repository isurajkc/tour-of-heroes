import React, { Component } from 'react';
import { Page } from 'components';
import './AddHero.css';

class AddHero extends Component {
  state = {
    name: '',
    realName: '',
    superPowers: '',
    avatar: '',
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

    fetch('http://localhost:4000/superHeroes', {
      method: 'POST',
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
    return (
      <Page>
        <button class="back-button" onClick={this.goBack}>
          <span>←</span> Back to Superheroes
        </button>

        <h2 className="add-hero-title">Add new superhero</h2>

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
                onChange={this.handleChange}
                required
              />
            </div>

            <button onClick={this.onSubmit} className="submit-button">
              <span>Add</span>
            </button>
          </div>
        </form>
      </Page>
    );
  }
}

export default AddHero;
