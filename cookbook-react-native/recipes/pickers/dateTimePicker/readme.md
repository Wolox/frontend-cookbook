# Cookbook React Native Bootstrap: CustomDialog Recipe

<p align="center">
  <img width="400" height="400" src="https://i.ibb.co/BCfCc8F/Captura-de-Pantalla-2021-11-02-a-la-s-13-31-28.png" >
  <img width="400" height="400" src="https://i.ibb.co/421pwkh/Captura-de-Pantalla-2021-11-02-a-la-s-13-43-36.png" >

</p>
<p align="center">
  <img width="400" height="400" src="https://i.ibb.co/7RKBPYQ/Captura-de-Pantalla-2021-11-02-a-la-s-13-32-26.png">
</p>
<p align="center">
  <img width="400" height="400" src="https://i.ibb.co/Tvq7q8C/Captura-de-Pantalla-2021-11-02-a-la-s-13-31-47.png">
</p>

## Installation

`yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker`

or

`npm install react-native-modal-datetime-picker @react-native-community/datetimepicker`

and

`npx pod-install`

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Constants files

#### alias `@constants`

- [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)

### Recipes

#### alias `@buttonsRecipes` and `@modalsRecipes` but it would be recommended to put them in `@components`instead

- [CustomHighlightButton](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-highlight-button#readme)

- [CustomModal](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-modal#readme)

- [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

## Usage

```tsx
function Home() {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<string | Date>();

  console.log(hour);
  console.log(date);
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [
    dispatch
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomDateTimePicker
          accessibilityLabel="customDate"
          mode={'time'}
          is24hs={true}
          setDate={setDate}
          setHour={setHour}
          icon={icCalendar}
          styleIcon={{ width: 20, height: 20, resizeMode: 'contain' }}
          hourFormat={'toLocaleTimeString'}
        />
      </View>
    </View>
  );
}

export default Home;
```

## Props

| Prop               | Default |                 Type                  | Description                                                   |
| :----------------- | :-----: | :-----------------------------------: | :------------------------------------------------------------ |
| accessibilityLabel |         |               'string'                | Defines acesibility to Component                              |
| styleModal         |    -    |               ViewStyle               | style to Modal only works in IOS                              |
| styleContainer     |    -    |               ViewStyle               | style to Container Component                                  |
| mode               |  date   |      ('date','time','datetime')       | defines the type of datePicker.                               |
| is24hs             |  false  |                boolean                | defines the hour format AM/PM or 24hs.                        |
| setDate            |    -    |               Function                | function to setState and save the date picked.                |
| setHour            |    -    |               Function                | function to setState and save the hour picked.                |
| styleBtn           |    -    |               ViewStyle               | style to button to open the modal picker.                     |
| styleTextBtn       |    -    |               TextStyle               | style to text button to open the modal picker.                |
| textButton         |    -    |                string                 | text to use in button modal.                                  |
| onPressButton      |    -    |               Function                | void Function to use when pressed button to open Modal.       |
| onPressConfirm     |    -    |               Function                | void Function called when confirm button was pressed.         |
| onPressCancel      |    -    |               Function                | void Function called when cancel button was pressed.          |
| icon               |    -    |          ImageSourcePropType          | icon png or svg to use into button.                           |
| styleIcon          |    -    |              ImageStyle               | style image to icon,ex: height, width, resizemode and more.   |
| hourFormat         |    -    | ('toLocaleTimeString','toISOString' ) | defines the format to return selected hour and save in state. |
| confirmTextIOS     |    -    |                string                 | text to use in confirmation button only available in ios.     |
| cancelTextIOS      |    -    |                string                 | text to use in cancel button only available in ios.           |

## Test

- Added Snapshot and test constants
- move the **test/components/dateTimePicker** to exactly path
- update the imports ex:
  import {...} from '@pickersRecipes/dateTimePicker/constants' to '@components/dateTimePicker/constants' when added to project
