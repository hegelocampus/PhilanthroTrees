import React from 'react';
import Button from '@material/react-button';

export default (props) => {
  return (
    <Button
      raised
      className='button-alternate'
      onClick={() => console.log('clicked!')}
    >
      Click Me!
    </Button>
  );
};