import React from 'react';
import SessionForm from './session/session';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/philanthrotrees_logo.png'
import cactus1 from '../../images/sprites/cactus/cactus_12.png'
import cactus2 from '../../images/sprites/cactus/cactus_23.png'
import rose from '../../images/sprites/rose/rose_15.png'
import violet from '../../images/sprites/violet/violet_19.png'

import '../../stylesheets/splash.scss';

export default (props) => {
  return (
    <div className="splash-page">
      <div className="header">
        <img src={logo} alt="site logo"></img>
      </div>

      <div className="splash-1">
        <div className="about">
          <h2>Grow good habits and improve your community.</h2>
          <p>
            Making a difference doesn't have to be hard. It's time to have fun
            when you do good. Join members of your community today to make a
            better world both online and offline.
          </p>
          <div className="plant-sprites">
            <img src={cactus1} alt="pixel cactus"></img>{" "}
            <img src={cactus2} alt="pixel cactus"></img>{" "}
            <img src={cactus1} alt="pixel cactus"></img>
          </div>
        </div>

        <SessionForm />
      </div>

      <div className="details">
        <h2>Build and Grow!</h2>
        <p>
          {" "}
          PhilanthroTrees is a free task-tracker and productivity app that
          encourages you to go out and make a difference by providing you with
          more instant gratification. Completing tasks and doing good in the
          real world also improves your in-game community, to provide motivation
          and inspiration. But be careful! Just like in real life, slacking off
          can have consequences.
        </p>
        <div className="plant-sprites">
          <img src={violet} alt="pixel violet"></img>{" "}
          <img src={rose} alt="pixel rose"></img>{" "}
          <img src={violet} alt="pixel violet"></img>
        </div>
      </div>

      <div className="footer">
        <p>
          Bee Ellis
          <a href="https://github.com/hegelocampus">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/bee-ellis-2b126b185/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          | Garvin Ming
          <a href="https://github.com/G07Watch">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/garvin-ming/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          | Kaneka Chhak
          <a href="https://github.com/kchhak">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/kanekachhak/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
      </div>
    </div>
  );
}

