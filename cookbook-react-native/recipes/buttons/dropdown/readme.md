# Cookbook React Native Bootstrap: Dropdown Recipe

<p align="center">
  <img src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/dropdown/recipe.gif">
</p>

## Installation

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

### Utils files
#### alias `@utils`

* [styleUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/styleUtils.ts)

### Constants files
#### alias `@constants`

* [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)

### Recipes
#### alias `@textsRecipes` but it would be recommended to put them in `@components`instead

* [CustomText](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text#readme)

And remember to visit the `styles` and `constants` files to customize your button style.

## Usage

``` ts
import React, { useState } from 'react';
import { View } from 'react-native';
import Dropdown from '@buttonsRecipes/dropdown';

const items = [
  { id: '1', title: 'item 1' },
  { id: '2', title: 'item 2' },
  { id: '3', title: 'item 3' },
  { id: '4', title: 'item 4' },
  { id: '5', title: 'item 5' },
  { id: '6', title: 'item 6' }
];

interface Item {
  id: string;
  title: string;
}

function MyDropdown() {
  const [value, setValue] = useState<Item[]>([]);

  return <Dropdown title={'Test selection'} multioption items={items} setValue={setValue} />;
}

export default MyDropdown;
```

## Props

Item = { id: string; title: string }

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| title | 'select item' | string | Label text when there is no selection. |
| multioption | `false` | boolean | If true, allows select multiple items. |
| items | - | Array<Item<V>> | Arrangement with the items to use. |
| setValue | - | Dispatch<SetStateAction<Array<Item<V>>>> | SetStateAction to store the selected items. |

and [CustomTextProps](https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/texts/custom-text/readme.md)
