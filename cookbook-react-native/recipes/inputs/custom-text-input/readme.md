# Cookbook React Native Bootstrap: CustomTextInput Recipe (custom-text-input)

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/inputs/custom-text-input/recipe.gif">
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
* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Interfaces files
#### alias `@interfaces`

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)

### Recipes
#### alias `@textsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

### Optional

You can find some useful validations utils [here](https://github.com/Wolox/wolmo-bootstrap-react-native/tree/master/generators/app/templates/src/utils/validations)


## Usage

``` ts
import { Formik } from 'formik';
import CustomTextInputFormikField from '@components/CustomTextInput'; // CustomTextInput wrapped by withFormik HOC
import { validationsWrapper, validateRequired, validateEmail } from '@utils/validations/validateUtils';
...

function MyForm() {
  ...
  return (
    <Formik onSubmit={handleFormSubmit}>
      {({ handleSubmit, isValid }) => (
        <>
          <CustomTextInputFormikField
            animated
            keyboardType="email-address"
            label="email"
            name="email"
            placeholder="email@domain.com"
            showError={hasLoginError}
            validate={validationsWrapper([validateRequired, validateEmail])}
          />
          <CustomHighlightButton
            onPress={handleSubmit}
            title="Login"
            disabled={hasLoginError || !isValid}
          />
        </>
      )}
    </Formik>
  );
}

export default MyForm;
```

## Props

| animated | `false` | boolean | If true, animates the text input label. |
| disabled | `false` | boolean | If true, text is not editable and renders a `gray` border bottom. |
| error | `false` | string | The value to show for the text error. |
| errorContainerStyle | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Overrides the error wrapped view style. |
| errorStyle | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the error text style. |
| inputContainerStyle | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Overrides the input wrapped view style. |
| inputTextStyles | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the input text style. |
| isFocused | `false` | boolean | If true, renders a `blue` border bottom and renders the input label over the input and smaller. |
| label | - | string | The string that will be rendered as the input label. |
| labelStyle | - | [TextStyleProps](https://reactnative.dev/docs/text-style-props) | Overrides the label style. |
| multiline | `false` | boolean | If true, the text input can be multiple lines. |
| onChange | - | function | Callback that is called when the text input's text changes. |
| placeholder | - | The string that will be rendered before text input has been entered. |
| placeholderColor | - | string | The text color of the placeholder string. |
| secureTextEntry | `false` | boolean | If true, the text input obscures the text entered so that sensitive text like passwords stay secure. You can toggle this value with `showEye` |
| showError | `false` | boolean | If true, renders a `red` border bottom. |
| showEye | `false` | boolean | If true, shows an eye icon that toggles whether to secure the input or not. |
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props) | Overrides the wrapped view style. |
| value | - | string | The value to show for the text input. |

and [TextInputProps](https://reactnative.dev/docs/textinput#props), [TextProps](https://reactnative.dev/docs/text#props)
