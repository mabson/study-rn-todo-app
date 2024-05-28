import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./style";
import { Checkbox } from "react-native-ui-lib";
import uuid from "react-native-uuid";

interface TodoProps {
  id: string;
  done: boolean;
  title: string;
}

export function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [todoTitle, setTodoTitle] = useState("");

  function handleAddTodoItem() {
    const todo = {
      id: uuid.v4().toString(),
      done: false,
      title: todoTitle,
    };
    console.log(todo);
    setTodos((prevState) => [...prevState, todo]);
    setTodoTitle("");
  }

  function handleTodoRemove(uuid: string) {
    const selectedTodo = todos.find((e) => e.id === uuid);
    Alert.alert("Remover", `Realmente deseja remover ${selectedTodo?.title}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTodos((prevState) => prevState.filter((todo) => todo.id !== uuid)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTodoDone(uuid: string) {
    let selectedTodo = todos.find((e) => e.id === uuid);
    Alert.alert(
      "Alterar",
      `Alterar o status da tarefa ${selectedTodo?.title}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setTodos(
              [...todos].map((todo) => {
                if (todo.id === uuid) {
                  todo.done = !todo.done;
                }
                return todo;
              })
            );
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../../assets/logo.png")} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTodoTitle}
          value={todoTitle}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTodoItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counters}>
        <View style={styles.counter}>
          <Text style={styles.counter_created}>Criadas</Text>
          <Text style={styles.counter_value}>{todos.length}</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counter_done}>Concluídas</Text>
          <Text style={styles.counter_value}>
            {todos.filter((e) => e.done).length}
          </Text>
        </View>
      </View>
      <View style={styles.line} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.list_row}>
              <Checkbox
                style={styles.list_checkbox}
                value={item.done}
                onValueChange={() => handleTodoDone(item.id)}
              />
              <Text
                style={item.done ? styles.list_text_done : styles.list_text}
              >
                {item.title}
              </Text>
              <TouchableOpacity
                style={styles.list_button}
                onPress={() => {
                  handleTodoRemove(item.id);
                }}
              >
                <Image source={require("../../../assets/trash.png")} />
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.empty_container}>
            <Image source={require("../../../assets/empty.png")} />
            <Text style={styles.empty_container_title}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.empty_container_subtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        }
      />
    </View>
  );
}
