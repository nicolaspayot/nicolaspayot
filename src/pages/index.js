import '../assets/css/base.css'
import { wrapper } from '../assets/css/components/wrapper.module.css'

import React from 'react'
import Header from '../components/header'
import Avatar from '../components/avatar'
import Greetings from '../components/greetings'
import SocialIcons from '../components/social-icons'
import Footer from '../components/footer'

export default () => (
  <div className={wrapper}>
    <Header />
    <Avatar />
    <Greetings />
    <SocialIcons />
    <Footer />
  </div>
)
