import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Header } from '../../components/Header'

import plusImg from '../../../assets/plus.png'
import clipboardImg from '../../../assets/clipboard.png'
import trashImg from '../../../assets/trash.png'
import checkImg from '../../../assets/check.png'

import { styles } from './styles'

interface ITask {
  name: string
  isConcluded: boolean
}

export function Home() {
  const [focus, setFocus] = useState(false)

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleSubmitTask() {
    setTasks((old) => [...old, { name: task, isConcluded: false }])

    setTask('')
  }

  function handleConcludedTask(task: ITask) {
    setTasks((old) => {
      const findTasksWihDierentName = old.filter(
        (item) => item.name !== task.name,
      )

      return [
        ...findTasksWihDierentName,
        { isConcluded: true, name: task.name },
      ]
    })
  }

  function handleRemoveTask(taskName: string) {
    setTasks((old) => {
      const findTasksWihDierentName = old.filter(
        (item) => item.name !== taskName,
      )

      return [...findTasksWihDierentName]
    })
  }

  const concludedTasks = tasks.filter((item) => item.isConcluded).length
  const unconcludedTasks = tasks.length - concludedTasks

  return (
    <>
      <StatusBar style="auto" />

      <Header />

      <View style={styles.contentContainer}>
        <View style={styles.inputAndButtonContainer}>
          <TextInput
            style={styles[focus ? 'inputFocus' : 'input']}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSubmitTask}
          >
            <Image source={plusImg} />
          </TouchableOpacity>
        </View>

        <View style={styles.concludedAndUnconcludedContainer}>
          <View style={styles.concludedContainer}>
            <Text style={styles.concludedText}>Criadas</Text>
            <View style={styles.concludedQuantity}>
              <Text style={styles.concludedQuantityText}>
                {unconcludedTasks}
              </Text>
            </View>
          </View>
          <View style={styles.unconcludedContainer}>
            <Text style={styles.unconcludedText}>Concluídas</Text>
            <View style={styles.unconcludedQuantity}>
              <Text style={styles.unconcludedQuantityText}>
                {concludedTasks}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(key) => key.name}
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Image source={clipboardImg} />

              <Text style={styles.emptyListTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListDescription}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable
              style={styles.taskCard}
              onPress={() => handleConcludedTask(item)}
              onLongPress={() => handleRemoveTask(item.name)}
            >
              <View
                style={styles[item.isConcluded ? 'taskChecked' : 'taskCheck']}
              >
                {item.isConcluded && <Image source={checkImg} />}
              </View>
              <Text style={styles.taskTitle}>{item.name}</Text>
              <Image source={trashImg} />
            </Pressable>
          )}
        />
      </View>
    </>
  )
}
