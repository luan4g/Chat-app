import {
  View,
  Text
} from 'react-native'
import styles from './styles/Chat'

const Chat = () => {
  return(
    <View style={styles.container}>
      <Text>Foto</Text>
      <Text>Nome</Text>
      <Text>Msg 1</Text>
      <Text>Msg 2</Text>
      <Text>Escrever</Text>
      <Text>Enviar</Text>
    </View>
  )
}

export default Chat
