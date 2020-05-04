import React from 'react'
import Helmet from 'react-helmet'

const SEO = {
  url: 'https://nicolaspayot.com/',
  title: 'Nicolas Payot',
  description: 'Senior Front-End Developer @ Malt / JS & UI enthusiastic',
  image: 'images/me.jpg',
}

export default () => (
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="description" content={SEO.description} />
    <meta name="theme-color" content="#537895" />
    <meta property="og:title" content={SEO.title} />
    <meta property="og:description" content={SEO.description} />
    <meta property="og:image" content={`${SEO.url}${SEO.image}`} />
    <meta property="og:url" content={SEO.url} />
    <meta name="twitter:title" content={SEO.title} />
    <meta name="twitter:description" content={SEO.description} />
    <meta name="twitter:image" content={`${SEO.url}${SEO.image}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <title>{`${SEO.title}, ${SEO.description}`}</title>
  </Helmet>
)
