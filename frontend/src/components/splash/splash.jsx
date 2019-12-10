import React from 'react';
import SessionForm from './session/session';

import logo from '../../images/philanthrotrees_logo.png'
import cactus1 from '../../images/sprites/cactus/cactus_12.png'
import cactus2 from '../../images/sprites/cactus/cactus_23.png'
import rose from '../../images/sprites/rose/rose_15.png'
import violet from '../../images/sprites/violet/violet_19.png'

import '../../stylesheets/splash.scss';

export default (props) => {
  //More stuff should go here in the future
  return (
    <div className="splash-page">
      <div className="header">
          <img src={logo} alt="site logo"></img>
      </div>

      <div className="splash-1">
        <div className="about">
          <h2>Grow good habits and improve your community.</h2>
          <p>Making a difference doesn't have to be hard. It's time to have fun when you do good. 
            Join members of your community today to make a better world both online and offline.
          </p>
          <div className="plant-sprites">
            <img src={cactus1} alt="pixel cactus image"></img> <img src={cactus2} alt="pixel cactus image"></img> <img src={cactus1} alt="pixel cactus image"></img>
          </div>
        </div>

        <SessionForm />
      </div>

      <div className="details">

        <h2>Build and Grow!</h2>
        <p> PhilanthroTrees is a free task-tracker and productivity app that encourages you to go
           out and make a difference by providing you with more instant gratification. Completing 
           tasks and doing good in the real world also improves your in-game community, to provide 
           motivation and inspiration. But be careful! Just like in real life, slacking off can have
           consequences.
        </p>
        <div className="plant-sprites">
          <img src={violet} alt="pixel violet image"></img> <img src={rose} alt="pixel rose image"></img> <img src={violet} alt="pixel violet image"></img>
        </div>
      </div>

      <div className="footer">
        <p><a href="https://github.com/hegelocampus">Bee Ellis</a> | <a href="https://github.com/G07Watch">Garvin Ming</a> | <a href="https://github.com/kchhak">Kaneka Chhak</a></p>
      </div>
    </div>
  )
}

