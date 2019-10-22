import React from 'react';

export default ({ type, percentage }) => {
  return (
    <div className="progress-bar">
      <div className={ `${ type }-bar` } style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

