import React, { useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  FlatList,
  Image
} from 'react-native';

import iconArrow from './assets/ic_general_row_arrow.png';

const items = [
  { id: '1', title: 'first item' },
  { id: '2', title: 'second item' }
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50
  },
  item: {
    width: '90%',
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 6
  },
  subItem: {
    padding: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  arrow: {
    tintColor: 'blue',
    padding: 6,
    transform: [{ rotate: '90deg' }]
  }
});

function Dropdown() {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setopen(!open);
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={1}>
        <Text>Header </Text>
        <Image
          source={iconArrow}
          resizeMode="contain"
          style={[styles.arrow, open && { transform: [{ rotate: '270deg' }] }]}
        />
      </TouchableOpacity>
      {open && (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 6 }}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'green' }} />}
        />
      )}
    </View>
  );
}

export default Dropdown;
