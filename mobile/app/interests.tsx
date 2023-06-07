import { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import blurBg from '../src/assets/bg-blur.png'

export default function Interests() {
  const [interests, setInterests] = useState('')
  const [disabled, setDisabled] = useState(true)
  const { name, email, phone, areas, hasKnowledge, knowledgeComments } =
    useLocalSearchParams()
  const router = useRouter()

  const handleChange = (e) => {
    setInterests(e)
    if (!e) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const nextPage = () => {
    router.push({
      pathname: '/workstation',
      params: {
        name,
        email,
        phone,
        areas,
        hasKnowledge,
        knowledgeComments,
        interests,
      },
    })
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-black"
      imageStyle={{ position: 'absolute', left: '40%' }}
    >
      <View className="top-10 flex-1 space-y-8 px-8 pt-10">
        <Text className="text-3xl font-bold text-white">
          Perfeito&nbsp;
          <Text className="text-primary">{name}</Text>, agora vamos entender
          melhor sobre o seu momento
        </Text>
        <Text className="text-lg text-white">
          Digite os seus interesses em tecnologia:
        </Text>
        <TextInput
          className="h-2/5 rounded-lg bg-secondary px-5 text-white"
          editable
          multiline
          placeholderTextColor="#9E9E9E"
          numberOfLines={10}
          maxLength={500}
          placeholder="Digite aqui"
          value={interests}
          onChangeText={(value) => handleChange(value)}
        />
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          className={`mx-8 rounded-lg py-3 ${
            disabled ? 'bg-secondary' : 'bg-primary'
          }`}
          disabled={disabled}
          onPress={() => nextPage()}
        >
          <Text className="text-center text-lg text-white">Prosseguir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          className="mx-8 mt-4 rounded-lg py-3"
          onPress={() => router.back()}
        >
          <Text className="text-center text-lg text-white">
            Voltar ao passo anterior
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
