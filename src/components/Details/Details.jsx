import React from 'react';
import './Details.scss';

export function Details({ id, types, stats, moves, weight, onSetDetails }) {

  const arr = stats.map(obj => ({ value: obj.base_stat, name: obj.stat['name'] }))
  const typesString = types.reduce((acc, el) => `${acc}${el.type.name} `, '')

  return (
    <div className="details">
      <span
        className="details__closer"
        onClick={() => onSetDetails(null)}
      >
        &#10539;
      </span>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = "https://www.pngplay.com/wp-content/uploads/11/Pokemon-GO-Logo-Free-PNG.png"
        }}
        alt={id}
      />
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Type</td>
            <td>
              {
                typesString
              }
            </td>
          </tr>

          {
            arr.map(obj => (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.value}</td>

              </tr>
            ))
          }

          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{moves.length}</td>
          </tr>
        </tbody>



      </table>
    </div>
  );
};
