# Cookbook React Native Bootstrap: CustomRadioButtonGroup Recipe

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-radio-button-group/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [fontUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/fontUtils.ts)
* [scalingUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)

### Config files
#### alias `@config`

* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)

### Recipes
#### alias `@textsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)


## Usage

``` ts
import CustomRadioButtonGroup from '@components/CustomRadioButtonGroup';

const optionsRecord = {
  A: 'option A',
  B: 'option B',
  C: 'option C',
  D: 'option D',
  E: 'option E',
};

function MyRadioButtonGroup() {
  return (
    <CustomRadioButtonGroup
      multioption
      title="Multiple option radio button"
      options={optionsRecord}
      disabledOptions={['E']}
      selectedOptions={['A', 'B']}
    />
  );
}

export default MyRadioButtonGroup;
```

## Props
`<K extends React.Key = string, V = string>`

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| radioButtonContainerStyle | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Radio button container style, wrapping the check icon and the option label |
| radioButtonStyle | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Radio button icon container style |
| radioButtonTextProps | - | [TextProps](https://reactnative.dev/docs/text#props) | Radio button option label text props |
| defaultOption | - | `K` | Selected option by default |
| disabledOptions | - | `Array<K>` | List of disabled options. |
| error | - | string | Error description. |
| multioption | `false` | `boolean` | Allows multiple selection of options. |
| onChange | - | `(selected: Array<K>) => void`| Function that recieves all the selected options keys and is called each time the selection list changes. |
| options | - | [Record<K, V>](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt) | Map with options keys as keys and option label as values. |
| selectedOptions | - | `Array<K>`| List of selected options, has priority over `defaultOption`.
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Radio button group style |
| title | - | `string` | Radio button group title. |
