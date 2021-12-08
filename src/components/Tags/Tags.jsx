import React from 'react';
import { Tag } from '../Tag';
import './Tags.scss';

export function Tags({ tags }) {

  return (
    <ul className="Tags">
      {
        tags.map(tag => (
          <React.Fragment key={tag.slot}>
            <Tag {...tag} />
          </React.Fragment>
        ))
      }
    </ul>
  );
};
