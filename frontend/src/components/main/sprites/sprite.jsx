import React from 'react';

export default ({ level, type }) => {
  type = (type ? type : 'sprout');
  let parsedLvl = String(level);
  if (parsedLvl.length < 2) {
    parsedLvl = '0'.concat(parsedLvl);
  }

  let parsedImgLocation = `../../../images/sprites/${ type }/${ type }_${ parsedLvl }.png`
  return (
    <div className="sprite">
      <img src={ parsedImgLocation } alt={ `${ type } sprite at level ${ level }` } />
    </div>
  );
}

