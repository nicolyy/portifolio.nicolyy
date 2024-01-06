/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    // remove modules you don't need
    modules: [
      'virtual',
      'keyboard',
      'mousewheel',
      'navigation',
      'pagination',
      'scrollbar',
      'parallax',
      'zoom',
      'controller',
      'a11y',
      'history',
      'hash-navigation',
      'autoplay',
      'thumbs',
      'free-mode',
      'grid',
      'manipulation',
      'effect-fade',
      'effect-cube',
      'effect-flip',
      'effect-coverflow',
      'effect-creative',
      'effect-cards',
    ],
  };
