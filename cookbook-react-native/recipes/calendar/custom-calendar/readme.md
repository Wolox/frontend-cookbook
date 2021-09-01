# Cookbook React Native Bootstrap: CustomCalendar Recipe

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/calendar/custom-calendar/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [fontUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/fontUtils.ts)
* [scalingUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)
* [dateUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/dateUtils.ts)
* [stringUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/stringUtils.ts)

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/fonts.ts)
* [time.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/time.ts)
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Config files
#### alias `@config`

* [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)

## Usage

``` ts
import CustomCalendar from '@components/CustomCalendar';

function MyCalendar() {
  ...
  return (
    <CustomCalendar 
        onPressDay={(date) => console.log(date)} 
        onPressArrowLeft={() => console.log('left')} 
        onPressArrowRight={() => console.log('right')}
    />
  );
}

export default MyCalendar;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onPressDay | - | (date: string) => void | Function that recieves the selected day and is called when one day is pressed. |
| onPressArrowLeft | - | () => void | Function called each time the left arrow is pressed. |
| disableArrowLeft | `false` | boolean | If true, the left arrow is deactivate. |
| onPressArrowRight | - | () => void | Function called each time the right arrow is pressed. |
| disableArrowRight | `false` | boolean | If true, the right arrow is deactivate. |
| initialSelectedDay | '' | string | Initial day in `YYYY-MM-DD` format. |
| disabledByDefault | `false` | boolean | If true, the selection of days is disabled. |
| calendarContainerStyle | - | [ViewStyle](https://reactnative.dev/docs/view-style-props)  |  Specify style for calendar container element. |
| calendarStyle | - | Theme | Specify theme properties to override specific styles for calendar parts. |
