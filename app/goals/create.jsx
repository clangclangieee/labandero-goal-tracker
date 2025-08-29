import { useState } from 'react'
import { StyleSheet, Text, TextInput, Pressable, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGoals } from '../../hooks/useGoals'
import { useRouter } from 'expo-router'

const Create = () => {
  const [goal, setGoal] = useState('')
  const { createGoal } = useGoals()
  const router = useRouter
 
  const handleSubmit = async () => {
    await createGoal({
      goal,
      progress:0
    })
    setGoal('')
    Keyboard.dismiss()
    router.push('/goals')

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a New Gol</Text>

      <TextInput
        style={styles.input}
        placeholder="Whachadu?"
        value={goal}
        onChangeText={setGoal}
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={{color: 'white'}}>Add A Gol</Text>
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