const { workspaceRoot } = require('@nrwl/devkit')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')
const { typewindTransforms } = require('typewind/transform')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      join(
        __dirname,
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      ),
      ...createGlobPatternsForDependencies(__dirname)
    ],
    transform: typewindTransforms
  },
  presets: [require(join(workspaceRoot, 'tailwind.preset.js'))]
}
