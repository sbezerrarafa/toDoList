import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, FlatList } from 'react-native';
import { styles } from './style';
import CardTarefa from '@/components/CardTarefa';
import { CardTarefaProps } from '@/components/CardTarefa';
import FormTarefa from '@/components/FormTarefa';
import {
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import Loading from '@/components/loading';
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

interface Tarefa {
  id: number;
  name: string;
  taskCompleted: boolean;
}

const Home = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefaName, setTarefaName] = useState('');

  function handleDeletarTarefa(name: string) {
    Alert.alert('Remover', `Deseja realmente remover está tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTarefas((prevState) =>
            prevState.filter((tarefa) => tarefa.name !== name),
          ),
      },
      {
        text: 'Não',
      },
    ]);
  }

  function handleAddTarefa() {
    if (tarefas.some((tarefa) => tarefa.name === tarefaName)) {
      Alert.alert('Tarefa existente', 'Já existe uma tarefa com este nome');
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      name: tarefaName,
      taskCompleted: false,
    };

    setTarefas((prevState) => [...prevState, novaTarefa]);
    setTarefaName('');
  }
  function toggleTask(id: number) {
    setTarefas((prevState) =>
      prevState.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, taskCompleted: !tarefa.taskCompleted }
          : tarefa,
      ),
    );
  }

  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.content}>
        <FormTarefa
          onChangeText={(text) => setTarefaName(text)}
          value={tarefaName}
          onPress={handleAddTarefa}
        />
        <View style={styles.containerListaTarefas}>
          <View style={styles.listaDeTarefas}>
            <View style={styles.textTopoListaDeTarefas}>
              <Text style={styles.textCriadas}>Criadas</Text>
              <Text style={styles.colorValores}>{tarefas.length}</Text>
            </View>
            <View style={styles.textTopoListaDeTarefas}>
              <Text style={styles.textConluidas}>Concluidas</Text>
              <Text style={styles.colorValores}>
                {' '}
                {tarefas.filter((tarefa) => tarefa.taskCompleted).length}
              </Text>
            </View>
          </View>
          <FlatList
            data={tarefas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardTarefa
                text={item.name}
                taskCompleted={item.taskCompleted}
                deleteTask={() => handleDeletarTarefa(item.name)}
                toggleTask={() => toggleTask(item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <FontAwesome6
                  name="clipboard"
                  size={60}
                  color={colors.gray[400]}
                />
                <View>
                  <Text style={styles.listEmptyTextDestaque}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.listEmptyText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
