import React from 'react'
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
        src="//res.cloudinary.com/dub8sl73k/image/upload/v1584176491/me_p90glq.jpg"
        alt="Avatar"
        height="180"
        width="180"
      />
    </div>
    <div className={`${side} ${back}`}>
      <a href="https://www.malt.fr/" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full"
          src="//res.cloudinary.com/dub8sl73k/image/upload/v1584176501/malt_dnfd8x.png"
          alt="Avatar"
          height="180"
          width="180"
        />
      </a>
    </div>
  </div>
)
