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
import RadioButtonRN from 'radio-buttons-react-native'

export default function CurrentKnowledge() {
  const router = useRouter()
  const { name, email, phone, areas } = useLocalSearchParams()
  const [knowledgeComments, setKnowledgeComments] = useState('')
  const [hasKnowledge, setHasKnowledge] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const options = [
    {
      label: 'Sim',
    },
    {
      label: 'Não',
    },
  ]

  const handleChange = (e) => {
    setDisabled(false)
    if (e.value === 'Sim') {
      setHasKnowledge(true)
    } else {
      setHasKnowledge(false)
    }
  }

  const nextPage = () => {
    router.push({
      pathname: '/interests',
      params: {
        name,
        email,
        phone,
        areas,
        hasKnowledge,
        knowledgeComments,
      },
    })
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-black"
      imageStyle={{ position: 'absolute', left: '60%' }}
    >
      <View className="top-10 flex-1 space-y-8 px-8 pt-10">
        <Text className="text-3xl font-bold text-white">
          Perfeito&nbsp;
          <Text className="text-primary">{name}</Text>, agora vamos entender
          melhor sobre o seu momento
        </Text>
        <Text className="text-lg text-white">
          Atualmente você possui conhecimento em alguma área na tecnologia?
        </Text>
        <View className="space-y-6">
          <RadioButtonRN
            data={options}
            box={false}
            style={{
              transform: [{ scale: 1.2 }],
              paddingLeft: 25,
            }}
            activeColor="#782dd4"
            circleSize={20}
            textColor={'#fff'}
            selectedBtn={(e) => handleChange(e)}
          />
        </View>
      </View>
      <View className="mb-5 px-5">
        <Text className="pb-5 text-lg text-white">
          Conte um pouco sobre seus conhecimentos
        </Text>
        <TextInput
          className="rounded-t-lg bg-secondary px-5 text-white"
          editable
          multiline
          placeholderTextColor="#9E9E9E"
          numberOfLines={5}
          maxLength={200}
          placeholder="Digite aqui"
          value={knowledgeComments}
          onChangeText={(value) => setKnowledgeComments(value)}
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
