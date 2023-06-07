import { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import TagInput from '../src/components/TagInput'
import blurBg from '../src/assets/bg-blur.png'

export default function UserLinks() {
  const [tagValue, setTagValue] = useState('')
  const router = useRouter()
  const {
    name,
    email,
    phone,
    areas,
    hasKnowledge,
    knowledgeComments,
    interests,
    workstation,
  } = useLocalSearchParams()

  const nextPage = () => {
    router.push({
      pathname: '/find-start-future',
      params: {
        name,
        email,
        phone,
        areas,
        hasKnowledge,
        knowledgeComments,
        interests,
        workstation,
        tagValue,
      },
    })
  }

  useEffect(() => {
    handleTag(tagValue)
  }, [tagValue])

  const handleTag = async (e) => {
    setTagValue(e)
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
        <Text className="mb-10 text-lg text-white">
          Tem algum link que queira mostrar sobre os seus trabalhos? (Linkedin /
          Behance / Github)
        </Text>
        <TagInput currentTags={handleTag} />
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        className={`mx-8 rounded-lg bg-primary py-3`}
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
    </ImageBackground>
  )
}
