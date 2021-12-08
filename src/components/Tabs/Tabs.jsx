import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './Tabs.scss';

export function Tabs() {

  const { filterBy, setEndPoint, setFilterBy } = useContext(AppContext)


  return (
    <div className="tabs">
      <hr className="tabs__line tabs__line--left" />
      <button
        className="tabs__tab tabs__tab--all"
        disabled={!filterBy}
        onClick={() => {
          setFilterBy('')
          setEndPoint('?limit=12&offset=0')
        }}
      >
        All
      </button>
      <button
        className="tabs__tab tabs__tab--filterBy"
        disabled={filterBy}
        hidden={!filterBy}
      >
        {filterBy}
      </button>
      <hr className="tabs__line" />

    </div>
  );
};
