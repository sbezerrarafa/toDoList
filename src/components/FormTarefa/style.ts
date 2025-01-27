import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.blue.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
  },
});
