import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';

export interface CardTarefaProps {
  text: string;
  taskCompleted: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
}
const CardTarefa: React.FC<CardTarefaProps> = ({
  text,
  taskCompleted,
  toggleTask,
  deleteTask,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTask}>
        <View
          style={[
            styles.radioButton,
            taskCompleted && styles.radioButtonSelected,
          ]}
        >
          {taskCompleted && (
            <MaterialIcons name="check" size={16} color="#fff" />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, taskCompleted && styles.textCompleted]}>
        {text}
      </Text>
      <TouchableOpacity onPress={deleteTask}>
        <MaterialIcons name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CardTarefa;
