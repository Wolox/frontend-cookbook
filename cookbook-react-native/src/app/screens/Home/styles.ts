import { StyleSheet } from 'react-native';
import { green, blue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginBottom: 10,
    backgroundColor: blue
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  home: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    marginBottom: 40,
    alignSelf: 'center'
  }
});
