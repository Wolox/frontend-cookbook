import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomOpacityButton from '@buttonsRecipes/custom-opacity-button';
import { actionCreators as AuthActions } from '@screensRecipes/login/redux/auth/actions';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{/* TODO: Test your recipe */}</View>
      <CustomOpacityButton black onPress={handleLogout} title="Logout!" style={styles.button} />
    </View>
  );
}

export default memo(Home);
