import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function TagInput({ currentTags }) {
  const [tags, setTags] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()])
      currentTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleDeleteTag = (tagIndex) => {
    const updatedTags = [...tags]
    updatedTags.splice(tagIndex, 1)
    currentTags(updatedTags)
    setTags(updatedTags)
  }

  return (
    <KeyboardAwareScrollView
      className="bg-transparent"
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <View className="w-full rounded-lg bg-secondary px-3 py-3">
        <TextInput
          className="text-white"
          placeholder="Digite aqui"
          placeholderTextColor="#9E9E9E"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </View>
      <View className="mt-5 w-[300px]">
        {tags.map((tag, index) => (
          <>
            <TouchableOpacity
              className="rounded-lg bg-secondary px-4 py-4"
              key={index}
              onPress={() => handleDeleteTag(index)}
            >
              <Text className="text-white">{tag}</Text>
            </TouchableOpacity>
            <View className="mb-5">
              <TouchableOpacity
                className="absolute -right-6 -top-11 items-end"
                key={index}
                onPress={() => handleDeleteTag(index)}
              >
                <Text className="text-2xl font-bold text-white">x</Text>
              </TouchableOpacity>
            </View>
          </>
        ))}
      </View>
      <TouchableOpacity
        className="mt-5 items-center rounded-lg border-2 border-white bg-transparent p-1"
        onPress={handleAddTag}
      >
        <Text className="text-lg text-white">+ Adicionar</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}
