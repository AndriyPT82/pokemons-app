import './Tags.scss';
import { Tag } from '../Tag';
import React from 'react';

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
