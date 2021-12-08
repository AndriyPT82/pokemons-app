import { useContext } from 'react';
import { AppContext } from '../../App';
import './Tag.scss';


export function Tag({ type }) {

  const { setFilterBy } = useContext(AppContext)
  const { name } = type;
  return (
    <li
      className="tag"
      onClick={(event) => {
        event.stopPropagation()
        setFilterBy(name)
      }}
    >
      {name}
    </li>
  );
};
