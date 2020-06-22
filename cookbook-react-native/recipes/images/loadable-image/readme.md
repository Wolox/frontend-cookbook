# Cookbook React Native Bootstrap: LoadableImage Recipe

<p align="center">
  <img width="200" height="200" src="https://raw.githubusercontent.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/images/loadable-image/recipe.gif">
</p>

## Installation

`yarn add react-native-fast-image`

or

`npm install react-native-fast-image`

and

`npx pod-install`

and add this recipe under your `components` folder.

## Usage

``` ts
import LoadableImage from '@components/LoadableImage';
import { blue, white } from '@constants/colors';

function MyImage() {
  return (
    <LoadableImage
      source={{ uri: 'https://www.wolox.com.ar/assets/photo-brain-452a5adf68.png)' }}
      activityIndicatorColor={white}
      backgroundColor={blue}
      style={{ width: 100, height: 100 }}
    />
  );
}

export default MyImage;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| activityIndicatorColor | - | string | Activity indicator color |
| backgroundColor | - | string | Placeholder background color |
| placeholder | - | number | Placeholder local source |
| placeholderResizeMode | `cover` | [ImageResizeMode](https://reactnative.dev/docs/image#resizemode) | placeholder image resize mode
| source | - | [FastImage.Source](https://github.com/DylanVann/react-native-fast-image#source-object) | Image source |
| style | - | [ViewStyle](https://reactnative.dev/docs/view-style-props)  | Image container style |

and [FastImageProps](https://github.com/DylanVann/react-native-fast-image#properties)
