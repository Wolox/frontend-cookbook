module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@navigationHelper': './src/app/components/AppNavigator/helper',
          '@buttonsRecipes': './recipes/buttons',
          '@inputsRecipes': './recipes/inputs',
          '@textsRecipes': './recipes/texts',
          '@screensRecipes': './recipes/screens'
        }
      }
    ]
  ]
};
