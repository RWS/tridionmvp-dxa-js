const src = 'assets';
const dest = 'build';


module.exports = {
  jssource: `${src}/js/**/*.js`,
  jsdest: `${dest}`,
  babel: {
    options: {
      presets: ['env'],
    },
    filename: 'dxajs.babel.js',
  },
  build: {
    filename: 'dxajs.js',
  },
  watch: {
    files: [`${src}/js/**/*.js`],
    tasks: ['lint', 'build'],
  },
};
