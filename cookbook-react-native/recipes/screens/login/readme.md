# Cookbook React Native Bootstrap: Login Screen Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/screens/login/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [validations](https://github.com/Wolox/wolmo-bootstrap-react-native/tree/master/generators/app/templates/src/utils/validations)

### Config files
#### alias `@config`

* [api.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/api.ts)

### Interfaces files
#### alias `@interfaces`

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)

### Recipes
#### alias `@textsRecipes`, `@buttonsRecipes` and `@inputsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

* [CustomHighlightButton](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-highlight-button#readme)

* [CustomTextInput](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/inputs/custom-text-input#readme)

And you might want to move the `services`, `redux` and `interfaces` folder to a more suitable place in your project.
