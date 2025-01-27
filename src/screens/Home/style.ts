import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
  },
  topo: {
    height: 173,
    width: '100%',
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: -58,
    paddingHorizontal: 24,
  },
  containerListaTarefas: {},
  listaDeTarefas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomColor: colors.gray[400],
    borderBottomWidth: 1,
  },
  textTopoListaDeTarefas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  textCriadas: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.blue.blue_light,
  },
  textConluidas: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.blue.puple_dark,
  },
  colorValores: {
    color: colors.gray[100],
    fontFamily: fontFamily.bold,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: colors.gray[400],
    borderRadius: 8,
  },
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.gray[300],
    textAlign: 'center',
    padding: 50,
    gap: 20,
  },
  listEmptyTextDestaque: {
    color: colors.gray[300],
    textAlign: 'center',
    fontFamily: fontFamily.bold,
  },
  listEmptyText: {
    color: colors.gray[300],
    textAlign: 'center',
  },
});
