# Cookbook React Native Bootstrap: Keyboard hook Recipe

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Constants files

#### alias `@constants`

* [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

## Usage

This hook handles the state of keyboard visibility.

The hook return an array with **keyboardVisible** (boolean) and **handleDismissKeyboard** (function that hide the keyboard).

``` ts
import { useKeyboard } from '@hooks/useKeyboard';
...

function App() {
  const [keyboardVisible, handleDismissKeyboard] = useKeyboard();
  ...
  return (
    <Component>
      ...
    </Component>
  );
}

export default App;
```
