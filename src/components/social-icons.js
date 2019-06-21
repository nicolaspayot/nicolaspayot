import React from 'react'

import GithubIcon from '../assets/images/github.svg'
import TwitterIcon from '../assets/images/twitter.svg'
import MediumIcon from '../assets/images/medium.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import EmailIcon from '../assets/images/email.svg'

export default () => (
  <div className="mt-4 flex items-center justify-around w-80 md:w-100">
    <a
      href="https://github.com/nicolaspayot"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      aria-label="GitHub profile"
    >
      <GithubIcon id="github" fill="white" height={60} role="img" />
    </a>
    <a
      href="https://twitter.com/npayot"
      target="_blank"
      rel="noopener noreferrer"
      title="Twitter"
      aria-label="Twitter profile"
    >
      <TwitterIcon id="twitter" fill="white" height={100} role="img" />
    </a>
    <a
      href="https://medium.com/@npayot"
      target="_blank"
      rel="noopener noreferrer"
      title="Medium"
      aria-label="Medium profile"
    >
      <MediumIcon id="medium" fill="white" height={100} role="img" />
    </a>
    <a
      href="https://www.linkedin.com/in/npayot/"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
      aria-label="Linkedin profile"
    >
      <LinkedinIcon id="linkedin" fill="white" height={50} role="img" />
    </a>
    <a href="mailto:nicolas.payot@gmail.com" title="Mailto" aria-label="Mailto">
      <EmailIcon id="email" fill="white" height={50} role="img" />
    </a>
  </div>
)
