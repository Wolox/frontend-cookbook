# Cookbook React Native Bootstrap: Debounce hook Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/hooks/debounce/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Interfaces files
#### alias `@interfaces`

* [globalInterfaces.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/interfaces/globalInterfaces.ts)

## Usage Example

This hook forces a function to wait a certain amount of time before running again.

The hook return an array with the **debounced function** and a **boolean** which indicates if it is waiting.

``` ts
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import useDebounce from '@hooks/useDebounce';
import { Nullable } from '@interfaces/globalInterfaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});

const DEBOUNCE_TIME = 400;

function MyDebounce() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((text: Nullable<string>) => text && setSearchQuery(text), []);

  const [handleDebouncedSearch, isWaiting] = useDebounce<string>(handleSearch, DEBOUNCE_TIME);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={handleDebouncedSearch} />
      <ActivityIndicator animating={isWaiting} size="large" />
      {!isWaiting && <Text>{searchQuery}</Text>}
    </View>
  );
}

export default MyDebounce;
```
