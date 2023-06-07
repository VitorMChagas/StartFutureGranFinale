import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import StartFutureLogo from '../src/assets/logo-name-icon-white.svg'

export default function App() {
  const router = useRouter()

  const nextPage = () => {
    router.push('/base-info')
  }

  return (
    <>
      <View className="flex-1 items-center px-8 py-10">
        <View className="left-12 pt-10">
          <StartFutureLogo />
        </View>
        <View className="flex-1 items-center justify-center">
          <View className="space-y-12">
            <Text className="text-left font-title text-[46px] leading-snug text-white">
              Comece o seu novo futuro hoje.
            </Text>
            <Text className="text-left font-body text-lg leading-relaxed text-gray-100">
              Participe de equipes com designers, programadores e líderes.
              Adquira conhecimento na prática.
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full">
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-sm bg-primary px-5 py-8"
          onPress={() => nextPage()}
        >
          <Text className="text-center text-lg text-white">
            Quero participar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
