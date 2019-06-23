import React from 'react'
import Me from '../assets/images/me.jpeg'

export default () => (
  <div className="avatar" style={{ overflow: 'hidden' }}>
    <img
      className="rounded-full"
      style={{ width: '180px' }}
      src={Me}
      alt="Avatar"
      height="180"
      width="180"
    ></img>
  </div>
)
