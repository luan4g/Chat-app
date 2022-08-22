import {
  View,
  Text,
  Image
} from 'react-native'
import { FontAwesome5, Entypo } from '@expo/vector-icons'

import styles from './styles/Chat';

const Chat = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="arrow-left" size={20} color="#242424" />
        <View
          style={{
            width: 50,
            height: 50,
            marginLeft: 16,
            marginRight: 8,
          }}
        >
          <Image 
            source={{uri: "https://64.media.tumblr.com/e7b8e675ab152bd9e1f6807ea291b7da/df220733d8dd576b-d2/s540x810/d4a6e37d6876efe363b1f3c24967ea27d49f1907.pnj"}}
            style={styles.userPhoto}
          />  
          <View style={styles.userDotStatus}/>
        </View>
        <View>
          <Text style={styles.userName} >Arataki Itto</Text>
          <Text style={styles.userStatus} >Online</Text>
        </View>

        <View style={styles.userCall}>
          <Entypo name="video-camera" size={20} color="#ddd" />
          <FontAwesome5 name="phone-alt" size={20} color="#ddd" />
        </View>
      </View>
    </View>
  )
}

export default Chat
