import { useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native'
import blurBg from '../src/assets/bg-blur.png'
import NotebookIcon from '../src/assets/notebook.png'
import PCIcon from '../src/assets/pc.png'
import NoIcon from '../src/assets/no-icon.png'
import RadioButtonRN from 'radio-buttons-react-native'

export default function Workstation() {
  const [workstation, setWorkstation] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const router = useRouter()
  const {
    name,
    email,
    phone,
    areas,
    hasKnowledge,
    knowledgeComments,
    interests,
  } = useLocalSearchParams()

  const options = [
    {
      label: 'Notebook',
      value: 1,
    },
    {
      label: 'Pc',
      value: 2,
    },
    {
      label: 'Não tenho',
      value: 3,
    },
  ]

  const handleChange = async (e) => {
    setWorkstation(e.value)
    if (e.label) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const nextPage = () => {
    router.push({
      pathname: '/user-links',
      params: {
        name,
        email,
        phone,
        areas,
        hasKnowledge,
        knowledgeComments,
        interests,
        workstation,
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
        <View className="px-6">
          <Image
            source={NotebookIcon}
            alt="notebook"
            className="absolute right-5 top-4 z-10"
          />
          <Image
            source={PCIcon}
            alt="pc"
            className="absolute bottom-[110px] right-5 z-10"
          />
          <Image
            source={NoIcon}
            alt="no"
            className="absolute bottom-0 right-5 z-10"
          />
          <RadioButtonRN
            data={options}
            style={{
              transform: [{ scale: 1.2 }],
            }}
            boxStyle={{
              backgroundColor: '#1F1F1F',
              borderColor: '#1F1F1F',
              paddingVertical: 30,
            }}
            activeColor="#782dd4"
            circleSize={10}
            textColor={'#fff'}
            selectedBtn={(e) => handleChange(e)}
          />
        </View>
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
