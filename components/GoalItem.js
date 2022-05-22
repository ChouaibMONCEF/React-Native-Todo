import React from "react"
import { Text, View, StyleSheet, Pressable } from "react-native"

function GoalItem({ text, deleteGoalHandler, id }) {
  return (
    <View style={styles.boxStyle}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({pressed})=> pressed && styles.pressedItem }
      >
        <Text style={styles.textStyle}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#0F1833",
    borderColor: "#3e465b",
  },
  pressedItem: {
    opacity: 0.5,
  },
  textStyle: {
    color: "#86DCFC",
    padding: 15,
  },
})

export default GoalItem
