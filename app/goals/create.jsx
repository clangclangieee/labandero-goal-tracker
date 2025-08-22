import { useState } from 'react'
import { StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  const [goal, setGoal] = useState('')
  
  const handleSubmit = async () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a Gol</Text>

      <TextInput
        style={styles.input}
        placeholder="What do you want to do?"
        value={goal}
        onChangeText={setGoal}
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={{color: 'white'}}>Add New Gol</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6CADD',
  },
  title: {
    fontSize: 24,
  },
  input: {
    width: 300,
    backgroundColor: '#BE93E4',
    padding: 20,
    borderRadius: 8,
    marginVertical: 40,
  },
  button: {
    padding: 18,
    backgroundColor: '#BE93E4',
    color: 'white',
    borderRadius: 8,
  }
})