import React from 'react';
import { Button } from '@rmwc/button';

export default (props) => {
  return (
    <Button
      theme={['background']}
      className='button-alternate'
      onClick={() => console.log('clicked!')}
    >
      Click Me!
    </Button>
  );
};
