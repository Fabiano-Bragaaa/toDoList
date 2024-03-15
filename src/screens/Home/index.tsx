import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { List } from "../../components/List";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todayTask, setTodayTask] = useState("");

  function handleDeleteTask(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleUpdateTask() {
    if (tasks.some((task) => task.title === todayTask)) {
      return Alert.alert(
        "Tarefa já existente",
        "Essa tarefa já existe na sua lista de tarefas"
      );
    }
    if (todayTask === "") {
      return Alert.alert(
        "Preencha o campo",
        "Escreva qual a tarefa você quer adicionar"
      );
    }

    const newTask: Task = {
      id: String(Date.now()),
      title: todayTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTodayTask("");
  }

  function handleCompleteTask(taskId: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require("../../Img/Logo.png")} />
      </View>
      <View style={styles.formView}>
        <View style={styles.form}>
          <TextInput
            placeholderTextColor={"#808080"}
            placeholder="Adicione uma nova tarefa"
            style={styles.input}
            onChangeText={setTodayTask}
            value={todayTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateTask}>
            <Image source={require("../../Img/plus.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.conclusaoView}>
          <View style={styles.conclusao}>
            <Text style={styles.create}>Criadas</Text>
            <Text style={styles.validation1}>{tasks.length}</Text>
          </View>

          <View style={styles.conclusao}>
            <Text style={styles.conclusionText}>Concluídas</Text>
            <Text style={styles.validation2}>
              {tasks.filter((task) => task.completed).length}
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.sectionContainer}>
            <View style={styles.borderSection}></View>
          </View>
          <FlatList
            renderItem={({ item }) => (
              <List
                task={item.title}
                onRemove={() => handleDeleteTask(item.id)}
                onComplete={() => handleCompleteTask(item.id)}
                isCompleted={item.completed}
              />
            )}
            data={tasks}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => (
              <View style={styles.empty}>
                <Image
                  source={require("../../Img/Clipboard.png")}
                  style={styles.emptyImg}
                />
                <Text style={styles.title}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.description}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
