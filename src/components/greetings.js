import React from 'react'
import { wave, malt } from '../assets/css/components/greetings.module.css'

export default () => (
  <div className="text-center mt-5">
    <h1 className="text-3xl md:text-6xl">
      Hi! I'm Nicolas{' '}
      <span className={wave} role="img" aria-label="wave-emoji">
        👋
      </span>
    </h1>
    <h2 className="text-1xl md:text-3xl" style={{ fontWeight: 300 }}>
      JS enthusiastic / Frontend Developer @{' '}
      <a
        className={malt}
        href="https://www.malt.fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Malt
      </a>
    </h2>
  </div>
)
