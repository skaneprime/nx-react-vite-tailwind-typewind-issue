const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { typewindTransform } = require('typewind/transform')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      join(
        __dirname,
        '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      ),
      ...createGlobPatternsForDependencies(__dirname),
    ],
    transform: typewindTransform
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
