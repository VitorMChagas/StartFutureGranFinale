import { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import blurBg from '../src/assets/bg-blur.png'
import { Dropdown } from 'react-native-element-dropdown'
import axios from 'axios'

export default function UserLinks() {
  const [referral, setReferral] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const router = useRouter()
  const {
    name,
    email,
    phone,
    areas,
    hasKnowledge,
    knowledgeComments,
    workstation,
    tagValue,
  } = useLocalSearchParams()

  const data = [
    { label: 'Instagram', value: '1' },
    { label: 'Tiktok', value: '2' },
    { label: 'Linkedin', value: '3' },
    { label: 'Youtube', value: '4' },
    { label: 'Indicação', value: '5' },
    { label: 'Ferramenta de pesquisa', value: '6' },
    { label: 'Outros', value: '7' },
  ]

  const formData = {
    full_name: name,
    email,
    cellphone: phone,
    id_career: areas,
    has_tech_knowledge: hasKnowledge,
    tech_skills: knowledgeComments,
    id_study_tool: workstation,
    urls: tagValue,
    id_referral: referral,
  }

  const nextPage = () => {
    router.push({
      pathname: '/follow-us',
      params: {
        name,
      },
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/forms', formData)
      console.log('response', response)
    } catch (error) {
      console.log(error)
    } finally {
      nextPage()
    }
  }
  console.log(useLocalSearchParams())

  useEffect(() => {
    setReferral(referral)
    if (!referral) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [referral])

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
          Últimaaaaa pergunta, como conheceu a Start Future?
        </Text>
        <Dropdown
          mode="default"
          labelField="label"
          valueField="value"
          search={false}
          data={data}
          placeholder="Selecione aqui"
          value={referral}
          style={{
            backgroundColor: '#424242',
            paddingVertical: 9,
            paddingLeft: 10,
            borderRadius: 5,
          }}
          iconStyle={{
            position: 'absolute',
            right: 3,
            tintColor: '#FFF',
          }}
          placeholderStyle={{
            color: '#FFF',
            fontSize: 16,
          }}
          selectedTextStyle={{
            color: '#FFF',
          }}
          containerStyle={{
            backgroundColor: '#424242',
            borderColor: '#424242',
          }}
          activeColor="#161616"
          itemTextStyle={{ color: '#FFF' }}
          onChange={(item) => {
            setReferral(item.value)
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        className={`mx-8 rounded-lg py-3 ${
          disabled ? 'bg-secondary' : 'bg-primary'
        }`}
        disabled={disabled}
        onPress={() => handleSubmit()}
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
