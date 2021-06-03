# Cookbook React Native Bootstrap: InactivityHandler hook Recipe

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Interfaces files
#### alias `@interfaces`

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)

## Usage

This hook handles In-app inactivity and Background inactivity.

Don't forget to replace **timeForInactivity** and **actionToDispatch** at _@hooks/useInactivityHandler_ before you call this hook.

``` ts
import { useInactivityHandler } from '@hooks/useInactivityHandler';
...

function App() {
  const Inactivity = useInactivityHandler()

  ...
  return (
    <Inactivity.Component style={Inactivity.style} {...Inactivity.handler}>
      <AppNavigator>
    </InactivityHandler.Component>
  );
}

export default App;
```