import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomOpacityButton from '@buttonsRecipes/custom-opacity-button';
import CustomText from '@textsRecipes/custom-text';
import { actionCreators as AuthActions } from '@screensRecipes/login/redux/auth/actions';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer} />
      <CustomOpacityButton onPress={handleLogout} green title="Logout!" style={styles.home} />
    </View>
  );
}

export default memo(Home);
