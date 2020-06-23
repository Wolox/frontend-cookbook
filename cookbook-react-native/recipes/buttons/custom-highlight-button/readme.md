# Cookbook React Native Bootstrap: CustomHighlightButton Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-highlight-button/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [styleUtils](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/styleUtils.ts)
* [scalingUtils](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)

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

And remember to visit the `styles` and `constants` files to customize your button style and sizes.

## Usage

``` ts
import CustomHighlightButton from '@components/CustomHighlightButton';
...

function MyButton() {
  ...
  return (
    <CustomHighlightButton
      big
      large
      link
      loading={loading}
      onPress={handlePress}
      text="Big and large link button"
    />
  );
}

export default MyButton;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| activeOpacity | `0.7` | number | Determines what the opacity of the wrapped view should be when touch is active. |
| big | `false` | boolean | If true, the height of the wrapped view would be `BTN_HEIGHT.BIG`, otherwise it would be `BTN_HEIGHT.DEFAULT`. |
| blocked | `false` | boolean | If true, disable all interactions for this component without any visual feedback. |
| disabled | `false` | boolean | If true, disable all interactions for this component with visual feedback. |
| icon | - | number | Icon source. |
| iconStyle | - | [ImageStyle](https://reactnative.dev/docs/image-style-props) | Icon style. |
| large | `false` | boolean | If true, the min width of the wrapped view would be `SIZES.LARGE`, otherwise it would be `SIZES.SMALL`. |
| link | `false` | If true, the wrapped view would be transparent and borderless. |
| loading | `false` | boolean| If true, an activity indicator would be rendered instead of the button. |
| medium | `false | boolean | If true, the min width of the wrapped view would be `SIZES.MEDIUM`, otherwise it would be `SIZES.SMALL`. |
| onPress | - | [TouchableHighlightProps.onPress](https://reactnative.dev/docs/touchablewithoutfeedback#onpress) | Called as soon as the touch is released. |
| secondary | `false` | boolean| If true, the wrapped view would have a `secondary` style scheme. |
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Overrides the wrapped view style. |
| textStyle | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the button label style. |
| title | - | string | Button label text. |

and [CustomTextProps](https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text/readme.md)
