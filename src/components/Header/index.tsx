import { Image, View } from 'react-native'

import logoImg from '../../../assets/logo.png'

import { styles } from './styles'

export function Header() {
  console.log(logoImg)

  return (
    <View style={styles.headerContainer}>
      <Image source={logoImg} />
    </View>
  )
}
