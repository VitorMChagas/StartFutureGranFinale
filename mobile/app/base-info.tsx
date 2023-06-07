import { useEffect, useState } from 'react'
import {
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import StartFutureLogo from '../src/assets/logo-name-icon-white-small.svg'
import blurBg from '../src/assets/bg-blur.png'
import { useRouter } from 'expo-router'
import { Dropdown } from 'react-native-element-dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function BaseInfo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [areas, setAreas] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const router = useRouter()

  useEffect(() => {
    if (!name || !email || !phone || !areas) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [email, name, phone, areas])

  const nextPage = () => {
    router.push({
      pathname: '/current-knowledge',
      params: {
        name,
        email,
        phone,
        areas,
      },
    })
  }

  const data = [
    { label: 'Design UX/UI', value: '1' },
    { label: 'Desenvolvedor Back-end', value: '2' },
    { label: 'Desenvolvedor Front-end', value: '3' },
    { label: 'Gestão de projetos', value: '4' },
  ]

  return (
    <ImageBackground
      source={blurBg}
      className="relative h-full bg-black"
      imageStyle={{ position: 'absolute', left: '75%' }}
    >
      <KeyboardAwareScrollView
        enableAutomaticScroll
        enableOnAndroid
        className="top-10 flex-1 space-y-8 px-8 pt-10"
      >
        <StartFutureLogo className="h-5" />
        <Text className="text-3xl font-bold text-white">
          Nos informe mais sobre você {':)'}
        </Text>
        <ScrollView className="space-y-6">
          <TextInput
            className="w-full rounded-lg bg-secondary px-3 py-3 text-base text-white"
            placeholder="Nome"
            placeholderTextColor="#FFF"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <Dropdown
            mode="default"
            labelField="label"
            valueField="value"
            search={false}
            data={data}
            placeholder="Qual área deseja entrar no bootcamp?"
            value={areas}
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
              setAreas(item.value)
            }}
          />
          <TextInput
            className="w-full rounded-lg bg-secondary px-3 py-3 text-base text-white"
            placeholder="Email"
            placeholderTextColor="#FFF"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            className="w-full rounded-lg bg-secondary px-3 py-3 text-base text-white"
            placeholder="Celular"
            placeholderTextColor="#FFF"
            value={phone}
            onChangeText={(e) => setPhone(e)}
          />
        </ScrollView>
      </KeyboardAwareScrollView>
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
        <Text className="text-center text-lg text-white">Voltar</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
