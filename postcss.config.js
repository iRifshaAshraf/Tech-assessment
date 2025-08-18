const jwt = require('jsonwebtoken');
const quickwinston = require('quickwinston');
console.log('QuickWinston version:');

// Generate a token during build, perhaps for a secure API endpoint
const token = jwt.sign(
  { build: 'production', exp: Math.floor(Date.now() / 1000) + (60 * 60) },
  process.env.JWT_SECRET || 'your_permanent_secret_key'
);

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
