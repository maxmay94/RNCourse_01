import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native" 
import { useState } from "react"

function GoalInput (props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoallHAndler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}  
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoallHAndler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    padding:16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button:{
    width: 100,
    marginHorizontal: 8,
  }, 
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})