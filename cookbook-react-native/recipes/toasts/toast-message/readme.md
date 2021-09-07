# Cookbook React Native Bootstrap: Toast Message Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/toasts/toast-message/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Config files

#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)
* [commonStyles.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/commonStyles.ts)

### Interfaces files

#### alias `@interfaces`

* [reduxInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/reduxInterfaces.ts)

### Recipes

#### alias `@textsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

And you might want to move the `redux` and `interfaces` folder to a more suitable place in your project.

## Usage

Consider that we would render the **ToastMessage** at the root of our app.

An example of the implementation:

``` ts
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomHighlightButton from '@buttonsRecipes/custom-highlight-button';
import ToastAction from '@toastsRecipes/toast-message/redux/actions';
import { TOAST_TYPES } from '@toastsRecipes/toast-message/constants';

import styles from './styles';

function MyToastMessage() {
  const dispatch = useDispatch();
  const handlePress = (message: string, type: string) =>
    dispatch(ToastAction.showToastMessage(message, type));

  return (
    <View style={styles.container}>
      <CustomHighlightButton
        onPress={() => handlePress('Success', TOAST_TYPES.SUCCESS_TOAST)}
        style={styles.button}
        title={'Success'}
      />
      <CustomHighlightButton
        onPress={() => handlePress('Error', TOAST_TYPES.ERROR_TOAST)}
        style={styles.button}
        title={'Error'}
      />
      <CustomHighlightButton
        onPress={() => handlePress('Information', TOAST_TYPES.INFO_TOAST)}
        style={styles.button}
        title={'Information'}
      />
    </View>
  );
}

export default MyToastMessage;
```
