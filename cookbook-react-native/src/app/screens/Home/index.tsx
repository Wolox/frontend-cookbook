import React, { useCallback, memo, useState } from 'react';
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
      <View style={styles.contentContainer}>
      <CustomOpacityButton onPress={()=>{}} green title="Opacity button" style={styles.button} />
      </View>
      <CustomOpacityButton onPress={handleLogout} green title="Logout!" style={styles.home} />
    </View>
  );
}

export default memo(Home);
