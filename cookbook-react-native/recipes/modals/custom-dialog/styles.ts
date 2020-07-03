import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

export default StyleSheet.create({
  modal: {
    backgroundColor: white,
    width: '100%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: 6
  },
  subtitle: {
    marginBottom: 6
  },
  button: {
    marginTop: 10
  }
});
