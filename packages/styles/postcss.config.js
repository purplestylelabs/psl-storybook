import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const plugins = [
  autoprefixer(),
  cssnano({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: process.env.NODE_ENV === 'production'
        },
      },
    ],
  }),
];

export default {
  syntax: 'postcss-scss',
  customSyntax: 'postcss-scss',
  plugins,
};
