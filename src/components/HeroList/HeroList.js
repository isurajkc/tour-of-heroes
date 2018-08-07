import React from 'react';
import { Link } from 'react-router-dom';
import './HeroList.css';
import { images } from 'config';
console.log(images.avatars);

const HeroList = ({ heroes, deleteHero }) => {
  return (
    <div>
      <Link class="add-button" to="/add-hero">
        <span>+</span>
      </Link>
      <ul className="heroes">
        {heroes.map((hero, index) => (
          <li className="hero" key={index}>
            <img src={`/img/${hero.avatar}`} alt="" />
            <div>
              <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
              <span>Real name: {hero.realName}</span>
            </div>
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
