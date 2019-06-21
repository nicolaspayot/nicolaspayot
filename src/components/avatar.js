import React from 'react'
import Me from '../assets/images/me-200x200.jpeg'

export default () => (
  <div className="avatar">
    <img
      className="rounded-full"
      src={Me}
      alt="Avatar"
      height="180"
      width="180"
    ></img>
  </div>
)
