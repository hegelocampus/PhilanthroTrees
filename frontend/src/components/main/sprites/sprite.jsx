import React from 'react';
import sprites from './sprite_pngs';
import '../../../stylesheets/sprite.scss';

export default ({ level = 7, type = 'sprout' }) => {
  // Level 7 is around the level where the sprites actualy start to look like plants
  // so we should never use any sprite under level 7.
  level = Math.max(level, 7);

  let sprite;
  for (let i = level; i > 0; i--){
    if (sprite) {
      break
    }
    let parsedLvl = String(i).padStart(2, '0');
    sprite = sprites[`./${ type }/${ type }_${ parsedLvl }.png`];
  }

  return (
    <div className="sprite-container">
      <img
        className="sprite-img"
        src={ sprite }
        alt={ `${ type } sprite at level ${ level }` }
      />
    </div>
  );
}

