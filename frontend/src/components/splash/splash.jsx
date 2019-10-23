import React from 'react';
import SessionForm from './session/session';

export default (props) => {
  //More stuff should go here in the future
  return (
    <div className="splash-page">
      <div className="splash-1">
        <div className="about">
          <h2>Grow good habits and improve your community.</h2>
          <p>Making a difference doesn't have to be hard. It's time to have fun when you do good. 
            Join members of your community today to make a better world both online and offline.
          </p>
        </div>

        <SessionForm />
      </div>

      <div className="details">
        <h2>Build and grow your community.</h2>
        <p> PhilanthroTrees is a free task-tracker and producticity app that encourages you to go
           out and make a difference by providing you with more instant gratification. Completing 
           tasks and doing good in the real world also improves your in-game community, to provide 
           motivation and inspiration. But be careful! Just like in real life, slacking off can have
           consequences.
        </p>
      </div>
    </div>
  )
}

