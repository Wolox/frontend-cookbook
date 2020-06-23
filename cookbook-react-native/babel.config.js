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
          '@buttonsRecipes': './recipes/buttons',
          '@checkboxesRecipes': './recipes/checkboxes',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@imagesRecipes': './recipes/images',
          '@inputsRecipes': './recipes/inputs',
          '@interfaces': './src/interfaces',
          '@navigationHelper': './src/app/components/AppNavigator/helper',
          '@screens': './src/app/screens',
          '@screensRecipes': './recipes/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@textsRecipes': './recipes/texts',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
