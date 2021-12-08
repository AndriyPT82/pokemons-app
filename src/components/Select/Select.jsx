import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../api/Api';
import { AppContext } from '../../App';
import './Select.scss';

export const Select = () => {

  const [types, setTypes] = useState([])

  const { setFilterBy, filterBy } = useContext(AppContext)

  useEffect(() => {
    getData('type')
      .then(res => setTypes(res.results.map(obj => obj.name)))
  }, []);

  return (
    <>
      <select
        className="select"
        onChange={(event) => setFilterBy(event.target.value)}
        defaultValue={filterBy}
      >
        <option
          value={""}
          selected={!filterBy && true}
        >
          all Pokemons
        </option>
        {
          types.map((type) => (
            <option value={type} selected={filterBy === type}>
              {type}
            </option>
          ))
        }
      </select>
    </>
  );
};