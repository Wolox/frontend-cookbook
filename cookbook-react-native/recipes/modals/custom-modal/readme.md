# Cookbook React Native Bootstrap: CustomModal Recipe

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-modal/recipe.jpg">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)

## Usage

``` ts
import CustomModal from '@components/CustomModal';

function MyModal() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <CustomButton onPress={show} title="Open Modal"/>
      <CustomModal visible={visible} onClose={hide}>
        <View style={styles.modalContent}>
      </CustomModal>
    </>
  );
}

export default MyModal;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| children | - | ReactNode | Modal content |
| onClose | - | () => void | Function called each time the dialog modal is closed. |
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props)  | Overrides the modal style. |
| visible | `false` | boolean | If true, the modal is visible. |
