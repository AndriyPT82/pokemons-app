import React from 'react';
import { Card } from '../Card';
import './Cards.scss';

export function Cards({ cards }) {

  return (
    <ul className="cards">
      {
        cards.map(card => (
        <React.Fragment key={card.name}>
          <Card {...card}/>
        </React.Fragment>
        ))
      }
    </ul>
  );
};