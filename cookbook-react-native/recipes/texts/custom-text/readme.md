# Cookbook React Native Bootstrap: CustomText Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text/recipe.jpg">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [fontUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/fontUtils.ts)
* [scalingUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)
* [styleUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/styleUtils.ts)

### Config files
#### alias `@config`

* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/fonts.ts)
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Interfaces files
#### alias `@interfaces``

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)


## Usage

``` ts
import CustomText from '@components/CustomText';
...

function MyText() {
  return <CustomText bold big blue>Hello world</CustomText>;
}

export default MyText;
```

## Props

| bold | `false` | boolean | If true, uses the font weight to `bold`. |
| semiBold | `false` | boolean | If true, uses the font weight to `semi bold`. |
| italic | `false` | boolean | If true, uses the `italic` font style. |
| center | `false` | boolean | If true, sets the font alignment to `center`. |
| justify | `false` | boolean | If true, sets the font alignment to `justify`. |
| right | `false` | boolean | If true, sets the font alignment to `right`. |
| blue | `false` | boolean | If true, sets the font color to `blue`. |
| darkGray | `false` | boolean | If true, sets the font color to `darkGray`. |
| gray | `false` | boolean | If true, sets the font color to `gray`. |
| green | `false` | boolean | If true, sets the font color to `green`. |
| white | `false` | boolean | If true, sets the font color to `white`. |
| xxsmall | `false` | boolean | If true, sets the font size to `SIZES.XXSMALL`. |
| xsmall | `false` | boolean | If true, sets the font size to `SIZES.XSMALL`. |
| small | `false` | boolean | If true, sets the font size to `SIZES.SMALL`. |
| medium | `false` | boolean | If true, sets the font size to `SIZES.MEDIUM`. |
| xmedium | `false` | boolean | If true, sets the font size to `SIZES.XMEDIUM`. |
| big | `false` | boolean | If true, sets the font size to `SIZES.BIG`. |
| xbig | `false` | boolean | If true, sets the font size to `SIZES.XBIG`. |
| error | `false` | boolean | If true, uses the error style (red font color). |
| children | - | [ReactNode]() | Every child is no longer using the Flexbox layout but using [text layout](https://reactnative.dev/docs/text#containers). |
| textProps | - | [TextProps](https://reactnative.dev/docs/text#props) | Overrides the text props. |
| style | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the text style. |
