# Cookbook React Native Bootstrap: CustomDialog Recipe

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-dialog/recipe.jpg">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)

### Recipes
#### alias `@buttonsRecipes` and `@modalsRecipes` but it would be recommended to put them in `@components`instead

* [CustomHighlightButton](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-highlight-button#readme)

* [CustomModal](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-modal#readme)

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

## Usage

``` ts
import CustomDialog from '@components/CustomDialog';

function MyDialog() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <CustomButton onPress={show} title="Open Modal"/>
      <CustomDialog type={DialogType.GENERAL_ERROR} visible={visible} onClose={hide} />
    </>
  );
}

export default MyDialog;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| type | - | string | String that defines translations. Check [DialogType](./interfaces.ts) enum to add more. |
| onClose | - | () => void | Function called each time the dialog modal is closed. |
| onPrimaryAction | - | () => void | Function called when the primary button is pressed |
| onSecondaryAction | - | () => void | Function called when the secondary button is pressed |
| visible | `false` | boolean | If true, the dialog is visible. |
