import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dummyText}>
        <Text>Another piece of text!</Text>
      </View>
      <Text style={styles.dummyText}>
        Hello World!!
      </Text>
      <Button title="Tap Me!"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
    padding: 16,
    borderWidth: 2, 
    borderColor: 'blue', 
  },
})
