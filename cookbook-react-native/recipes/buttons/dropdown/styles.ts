import { StyleSheet } from 'react-native';
import { blue, darkBlue, gray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    width: '90%',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: darkBlue
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center'
  },
  multioptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '90%'
  },
  multioptionItem: {
    backgroundColor: gray,
    padding: 4,
    margin: 2,
    borderRadius: 6
  },
  title: {
    color: gray
  },
  arrow: {
    tintColor: blue,
    margin: 6,
    transform: [{ rotate: '90deg' }]
  },
  item: {
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: blue
  }
});
