import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[500],
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.gray[400],
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.blue.blue_light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  radioButtonSelected: {
    backgroundColor: colors.blue.puple_dark,
    borderColor: colors.blue.puple_dark,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: colors.gray[300],
  },
});
