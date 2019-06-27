const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = () => ({
  plugins: [
    tailwind('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
})
