import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, FlatList, Button } from "react-native"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
    setEnteredGoalText("")
    endAddGoalHandler()
    setIsEmpty(false)
    }else{
      setIsEmpty(true)
    }
    
  }

  function endAddGoalHandler() {
    setModalVisible(false)
    setIsEmpty(false)
  }
  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          color='#86D'
          onPress={startAddGoalHandler}
        />

        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          Visible={modalVisible}
          endAddGoalHandler={endAddGoalHandler}
          isEmpty={isEmpty}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                />
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "#062553",
  },
  goalsContainer: {
    flex: 4,
    paddingTop: 10,
  },
})
