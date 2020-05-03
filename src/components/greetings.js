import React from 'react'
import { wave, malt } from '../assets/css/components/greetings.module.css'

export default () => (
  <div className="text-center mt-5">
    <h1 className="text-4xl md:text-6xl">
      Hi! I am Nicolas{' '}
      <span className={wave} role="img" aria-label="wave-emoji">
        👋
      </span>
    </h1>
    <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 300 }}>
      Senior Frontend Developer @{' '}
      <a
        className={malt}
        href="https://www.malt.fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Malt
      </a>
    </h2>
    <h3 className="text-1xl md:text-2xl" style={{ fontWeight: 300 }}>
      JavaScript & UI enthusiastic
    </h3>
  </div>
)
