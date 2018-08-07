import React, { Component } from 'react';
import { Page } from 'components';

class HeroForm extends Component {
  state = {};

  onSubmit = e => {
    e.preventDefault();
    // const name = this.inputName.value;
    // const realName = this.realName.value;
    // const superPowers = this.superPowers.value;
    // const avatar = this.avatarImage.value;

    const data = {
      name: this.inputName.value,
      realName: this.realName.value,
      superPowers: this.superPowers.value,
      avatar: this.avatarImage.value,
    };

    fetch('http://localhost:4000/superHeroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => {
      this.props.history.push('/');
    });

    this.inputName.value = '';
    this.realName.value = '';
    this.superPowers.value = '';
    this.avatarImage.value = '';
  };

  render() {
    return (
      <Page>
        <form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="add-hero" className="for">
                Hero Name
              </label>
              <input
                type="text"
                ref={c => {
                  this.inputName = c;
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="add-hero" className="for">
                Real Name
              </label>
              <input
                type="text"
                ref={c => {
                  this.realName = c;
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="add-hero" className="for">
                Super Powers
              </label>
              <input
                type="text"
                ref={c => {
                  this.superPowers = c;
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="add-hero" className="for">
                Avatar
              </label>
              <input
                type="text"
                ref={c => {
                  this.avatarImage = c;
                }}
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

export default HeroForm;
