import { Link, useLocalSearchParams } from 'expo-router'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native'
import blurBg from '../src/assets/bg-blur.png'
import linkedinLogo from '../src/assets/linkedin-logo.png'
import instagramLogo from '../src/assets/instagram-logo.png'
import githubLogo from '../src/assets/github-logo.png'
import tiktokLogo from '../src/assets/tiktok-logo.png'
import startFuturePeople from '../src/assets/start-future-people.png'

export default function UserLinks() {
  const { name } = useLocalSearchParams()
  const url = 'https://www.startfuture.com.br/'

  const handlePress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url)
    })

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-black"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <View className="top-[120px] flex-1 items-start space-y-7 px-8 pt-10">
        <Text className="text-3xl font-bold text-white">
          Perfeito&nbsp;
          <Text className="text-primary">{name}</Text>, muito obrigado pela
          inscrição, entraremos em contato {':)'}
        </Text>
        <Text className="text-lg text-white">
          Aproveite e nos siga nas redes sociais
        </Text>
        <View className="-ml-3 w-[75px] flex-1 flex-row">
          <Link href={'https://www.linkedin.com/company/startfuture/'}>
            <ImageBackground source={linkedinLogo} className="h-20 w-20" />
          </Link>
          <Link href={'https://www.instagram.com/startfuturebootcamp/'}>
            <ImageBackground source={instagramLogo} className="h-20 w-20" />
          </Link>
          <Link href={'https://github.com/StartFuture'}>
            <ImageBackground source={githubLogo} className="h-20 w-20" />
          </Link>
          <Link href={'https://www.tiktok.com/@startfuturebootcamp'}>
            <ImageBackground source={tiktokLogo} className="h-20 w-20" />
          </Link>
        </View>
      </View>
      <View className="mb-5">
        <ImageBackground
          source={startFuturePeople}
          className="mx-auto h-[180px] w-[400px] bg-contain bg-center bg-no-repeat"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        className={`mx-8 rounded-lg bg-primary py-3`}
        onPress={() => handlePress()}
      >
        <Text className="text-center text-lg text-white">Voltar para home</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}
