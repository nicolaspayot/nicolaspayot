import React from 'react'
import { social } from '../assets/css/components/social-icons.module.css'

import GithubIcon from '../assets/images/github.svg'
import TwitterIcon from '../assets/images/twitter.svg'
import MediumIcon from '../assets/images/medium.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import EmailIcon from '../assets/images/email.svg'

export default () => (
  <div
    className={`${social} mt-4 flex items-center justify-around w-80 md:w-100`}
  >
    <a
      href="https://github.com/nicolaspayot"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      aria-label="GitHub profile"
    >
      <GithubIcon id="github" fill="#fff" role="img" />
    </a>
    <a
      href="https://twitter.com/npayot"
      target="_blank"
      rel="noopener noreferrer"
      title="Twitter"
      aria-label="Twitter profile"
    >
      <TwitterIcon id="twitter" fill="#fff" role="img" />
    </a>
    <a
      href="https://medium.com/@npayot"
      target="_blank"
      rel="noopener noreferrer"
      title="Medium"
      aria-label="Medium profile"
    >
      <MediumIcon id="medium" fill="#fff" role="img" />
    </a>
    <a
      href="https://www.linkedin.com/in/npayot/"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
      aria-label="Linkedin profile"
    >
      <LinkedinIcon id="linkedin" fill="#fff" role="img" />
    </a>
    <a href="mailto:nicolas.payot@gmail.com" title="Mailto" aria-label="Mailto">
      <EmailIcon id="email" fill="#fff" role="img" />
    </a>
  </div>
)
