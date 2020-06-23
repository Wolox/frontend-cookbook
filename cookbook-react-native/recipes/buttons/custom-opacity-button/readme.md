# Cookbook React Native Bootstrap: CustomOpacityButton Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-opacity-button/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [styleUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/styleUtils.ts)

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Interfaces files
#### alias `@interfaces`

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)

### Recipes
#### alias `@textsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

And remember to visit the `styles` and `constants` files to customize your button style.

## Usage

``` ts
import CustomOpacityButton from '@components/CustomOpacityButton';
...

function MyButton() {
  ...
  return <CustomOpacityButton borderless onPress={handlePress} text="Button" />;
}

export default MyButton;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| activeOpacity | `0.7` | number | Determines what the opacity of the wrapped view should be when touch is active. |
| black | `false` | boolean | If true, sets the wrapped view background color to `black`. |
| borderless | `false` | boolean | If true, removes the wrapped view border width, and set its width to `auto`. |
| disabled | `false` | boolean | If true, disable all interactions for this component with visual feedback. |
| icon | - | number | Icon source. |
| iconStyle | - | [ImageStyle](https://reactnative.dev/docs/image-style-props) | Icon style. |
| onPress | - | [TouchableOpacityProps.onPress](https://reactnative.dev/docs/touchablewithoutfeedback#onpress) | Called as soon as the touch is released. |
| radial | `false` | boolean | If true, sets the wrapped view  borderRadius to `100`.
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Overrides the wrapped view style. |
| textStyle | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the button label style. |
| title | - | string | Button label text. |

and [CustomTextProps](https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text/readme.md)
