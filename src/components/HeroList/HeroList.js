import React from 'react';
import { Link } from 'react-router-dom';
import './HeroList.css';

const HeroList = ({ heroes, deleteHero }) => {
  return (
    <div>
      <Link className="add-button" to="/add-hero">
        <span>+</span>
      </Link>
      <ul className="heroes">
        {heroes.map((hero, index) => (
          <li className="hero" key={index}>
            <img src={`/img/${hero.avatar}`} alt="" />
            <div>
              <span className="name" to={`/detail/${hero.id}`}>
                {hero.name}
              </span>
              <span>Real name: {hero.realName}</span>
            </div>

            <Link to={`/detail/${hero.id}`}>
              <button className="edit-button">
                <i className="fa fa-edit" />
              </button>
            </Link>

            <button
              className="remove-button"
              onClick={() => deleteHero(hero.id)}
            >
              <i className="fa fa-trash" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
