import React, { useState } from 'react';
import { ActivityIndicator, Image, View, ViewStyle, ImageResizeMode } from 'react-native';
import FastImage, { Source, FastImageProps } from 'react-native-fast-image';

import styles from './styles';

interface Props extends FastImageProps {
  activityIndicatorColor?: string;
  backgroundColor?: string;
  placeholder?: number;
  placeholderResizeMode?: ImageResizeMode;
  source: Source;
  style?: ViewStyle;
}

function LoadableImage({
  activityIndicatorColor,
  backgroundColor,
  placeholder,
  placeholderResizeMode,
  source,
  onError,
  onLoadEnd,
  style,
  ...props
}: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoaded = () => {
    onLoadEnd?.();
    setLoading(false)};

  const handleError = () => {
    onError?.();
    setError(true);
  };

  // If you want to have a default image placeholder, remove the conditional to show the image
  // and replace the source with `placeholder || imagePlaceholder`
  return (
    <View style={[styles.container, style]}>
      {(loading || error || !source) && (
        <View style={[styles.contentContainer, styles.fill, { backgroundColor }]}>
          {!!placeholder && <Image source={placeholder} style={styles.fill} resizeMode={placeholderResizeMode} />}
          {loading && source?.uri && (
            <ActivityIndicator size="small" color={activityIndicatorColor} style={styles.spinner} />
          )}
        </View>
      )}
      <FastImage {...props} source={source} style={styles.fill} onError={handleError} onLoadEnd={handleLoaded} />
    </View>
  );
}

export default LoadableImage;
