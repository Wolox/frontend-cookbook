# Cookbook React Native Bootstrap: LoadableImage Recipe

## Installation

`yarn add react-native-fast-image`

or

`npm install react-native-fast-image`

and

`npx pod-install`

and add this recipe under your `components` folder.

# Usage

``` ts
import LoadableImage from '@components/LoadableImage';
import placeholder from '@assets/placeholder.png';
import { blue, gray } from '@colors/blue';

function MyImage() {
  return (
    <LoadableImage
      source={{ uri: '' }}
      activityIndicatorColor={blue}
      backgroundColor={gray}
      placeholder={placeholder}
      style={{ width: 100, height: 100 }}
    />
  );
}

export default MyImage;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| activityIndicatorColor | - | `string | undefined` | Activity indicator color |
| backgroundColor | - | `string | undefined` | Placeholder background color |
| placeholder | - | `number | undefined` | Placeholder local source |
| placeHolderResizeMode | `cover` | [ImageResizeMode](https://reactnative.dev/docs/image#resizemode)
| source | - | [FastImage.Source](https://github.com/DylanVann/react-native-fast-image#source-object) | Image source |
| style | - | `ViewStyle | undefined` | Image style |

and [FastImageProps](https://github.com/DylanVann/react-native-fast-image#properties)
