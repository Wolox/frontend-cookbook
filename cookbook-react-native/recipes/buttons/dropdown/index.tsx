import React, { Dispatch, SetStateAction, useState } from 'react';
import { LayoutAnimation, Platform, TouchableOpacity, UIManager, View, FlatList, Image } from 'react-native';
import CustomText from '@textsRecipes/custom-text';

import iconArrow from './assets/ic_general_row_arrow.png';
import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface Item {
  id: string;
  title: string;
}

interface Props {
  title: string;
  multioption?: boolean;
  items: Item[];
  setValue: Dispatch<SetStateAction<Item[]>>;
}

function Dropdown({ title = 'select item', multioption, items, setValue }: Props) {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState<Item[]>([]);
  const [options, setOptions] = useState<Item[]>(items);

  const onPressRow = () => {
    LayoutAnimation.easeInEaseOut();
    setDrop(!drop);
  };

  const onPressItem = (item: Item) => {
    if (multioption) {
      const addOption = [...selected, item];
      setSelected(addOption);
      setValue(addOption);
      setOptions(options.filter(option => option.id !== item.id));
    } else {
      setSelected([item]);
      setValue([item]);
    }
  };

  const quitSelection = (item: Item) => {
    const filterOptions = selected.filter(itemSelected => item.id !== itemSelected.id);
    setSelected(filterOptions);
    setValue(filterOptions);
    if (multioption) {
      setOptions([...options, item].sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={onPressRow} activeOpacity={1}>
        {multioption ? (
          selected.length ? (
            <View style={styles.multioptionContainer}>
              {selected.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.multioptionItem}
                  onPress={() => quitSelection(item)}>
                  <CustomText>{item.title}</CustomText>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <CustomText style={styles.title}>{title}</CustomText>
          )
        ) : (
          <CustomText style={Boolean(!selected.length) && styles.title}>
            {selected.length ? selected[0].title : title}
          </CustomText>
        )}
        <Image
          source={iconArrow}
          resizeMode="contain"
          style={[styles.arrow, drop && { transform: [{ rotate: '270deg' }] }]}
        />
      </TouchableOpacity>
      {drop && (
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
              <CustomText>{item.title}</CustomText>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

export default Dropdown;
