import { useContext } from 'react';
import { AppContext } from '../../App';
import './Tag.scss';


export function Tag({ type }) {

  const { setFilterBy, filterBy } = useContext(AppContext)
  const { name } = type;

  return (
    <button
      className="tag"
      disabled={filterBy === name}
      onClick={(event) => {
        event.stopPropagation();
        setFilterBy(`${name}`)
      }}
    >
      {name}
    </button>
  );
};
