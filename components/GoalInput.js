import React from "react"
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
} from "react-native"

function GoalInput({
  addGoalHandler,
  goalInputHandler,
  enteredGoalText,
  Visible,
  endAddGoalHandler,
  isEmpty,
}) {
  return (
    <Modal visible={Visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Goal.png")}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholderTextColor='#86DCFC'
          placeholder='Your Course Goals!!'
          onChangeText={goalInputHandler}
        />
        {isEmpty && (
          <Text style={styles.textStyle}>Please Fill the input or cancel!</Text>
        )}

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f64' onPress={endAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#86D' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderBottomColor: "#86DCFC",
    backgroundColor: "#000053",
  },
  image: {
    width: 175,
    height: 175,

    marginBottom: 50,
  },
  textStyle: {
    color: "#f64",
    marginTop: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#86DCFC",
    borderRadius: 5,
    width: "84%",
    padding: 5,
    paddingLeft: 10,
    color: "#86DCFC",
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    margin: 8,
  },
})

export default GoalInput
