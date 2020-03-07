import React from 'react'
import Me from '../assets/images/me.jpg'
import Malt from '../assets/images/malt.png'
import {
  avatar,
  side,
  front,
  back,
} from '../assets/css/components/avatar.module.css'

export default () => (
  <div className={avatar}>
    <div className={`${side} ${front}`}>
      <img
        className="rounded-full"
        src={Me}
        alt="Avatar"
        height="180"
        width="180"
      />
    </div>
    <div className={`${side} ${back}`}>
      <a href="https://www.malt.fr/" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full"
          src={Malt}
          alt="Avatar"
          height="180"
          width="180"
        />
      </a>
    </div>
  </div>
)
