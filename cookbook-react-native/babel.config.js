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
          '@hooks': './src/app/hooks',
          '@imagesRecipes': './recipes/images',
          '@inputsRecipes': './recipes/inputs',
          '@interfaces': './src/interfaces',
          '@modalsRecipes': './recipes/modals',
          '@navigationHelper': './src/app/components/AppNavigator/helper',
          '@pickersRecipes': './recipes/pickers',
          '@redux': './src/redux',
          '@screens': './src/app/screens',
          '@screensRecipes': './recipes/screens',
          '@services': './src/services',
          '@textsRecipes': './recipes/texts',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
