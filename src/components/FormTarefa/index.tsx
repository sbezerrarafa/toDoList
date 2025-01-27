import React from 'react';
import { styles } from './style';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { colors } from '@/styles/colors';

export interface IFormTarefa {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

const FormTarefa: React.FC<IFormTarefa> = ({
  value,
  onChangeText,
  onPress,
}) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormTarefa;
