import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../App';
import { getData } from '../../api/Api'
import { Tags } from '../Tags';
import './Card.scss';


export function Card({ name, url }) {

  const [types, setTypes] = useState([])
  const { setEndPoint, activeCardId } = useContext(AppContext)

  const id = url.split('/').at(-2);

  useEffect(() => {
    getData(`pokemon/${id}`).then(res => setTypes(res.types))
  }, [])

  return (
    <li
      className={classNames(
        "card",
        { "card--active": activeCardId === +id }
      )}
      onClick={() => setEndPoint(id)}
    >
      <img

        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = "https://www.pngplay.com/wp-content/uploads/11/Pokemon-GO-Logo-Free-PNG.png"
        }}
        alt={name}
      />
      <h2 className="card__title">{name}</h2>
      {
        !!types.length && <Tags tags={types} />
      }
    </li>
  );
};
