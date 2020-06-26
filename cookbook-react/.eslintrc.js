module.exports = {
  extends: ['wolox-react', 'wolox-typescript'],
  parser: '@typescript-eslint/parser',
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~services': './src/services',
          '~utils': './src/utils',
          '~app': './src/app',
          '~assets': './src/assets',
          '~hooks': './src/app/hooks',
          '~contexts': './src/app/contexts'
        }
      }
    }
  }
};
