# Cookbook React Native Bootstrap: CustomPicker Recipe

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/pickers/custom-picker/recipe-ios.gif">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/pickers/custom-picker/recipe-android.gif">
</p>

## Installation

`yarn add react-native-wheel-picker-android`

or

`npm install react-native-wheel-picker-android`

and

`npx pod-install`

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [scalingUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)


### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Recipes
#### alias `@buttonsRecipes` and `@modalsRecipes` but it would be recommended to put them in `@components`instead

* [CustomOpacityButton](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-opacity-button#readme)

* [CustomModal](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-modal#readme)


## Usage

``` ts
import CustomPicker from '@components/CustomPicker';

const data = [
  { text: 'A', value: 'Option A' },
  { text: 'B', value: 'Option B' },
  { text: 'C', value: 'Option C' },
  { text: 'D', value: 'Option D' },
];

function MyPicker() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <CustomButton onPress={show} title="Select"/>
      <CustomPicker visible={visible} onClose={hide} options={data} onAccept={setSelected} />
    </>
  );
}

export default MyPicker;
```

## Props
`Item<V> = { text: string; value: V }`

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onAccept | - | V => void | Function that recieves the selected option value and is called when the accept button is pressed. |
| onClose | - | () => void | Function called each time the picker modal is closed. |
| options | - | Array<Item<V>> | Picker list of elements. Each element has a value of type V and a text to render. |
| visible | `false` | boolean | If true, the picker is visible. |
