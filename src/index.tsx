import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native'
import { FontAwesome5, Entypo } from '@expo/vector-icons'

import styles from './styles/Chat';
import { useState } from 'react';

const Chat = () => {
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : "height"}
      style={styles.container}
    >
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
      <View style={styles.messagesView}>

       {/* Mensagem Recebida */}
        <View
          style={{
            alignItems: "flex-start",
            marginLeft: 8,
            marginTop: 8,
          }}
        >
          <View style={[styles.message, {backgroundColor: "#fff"}]}>
            <Text>Other Messajkjak jskajskj akjsk ajksj kajskjaksjkajsk jkjsaj ksjakj ksjk jskjak jskja ksjkaj ksajks jakj ksjak jskaj kjsak ge</Text>
          </View>
          <Text style={styles.messageStatus}>12:45</Text>
        </View>

        {/* Mensagem Enviada */}
        <View
          style={{
            marginTop: 8,
            alignItems: "flex-end",
            marginRight: 8,
           }}
        > 
          <View style={[styles.message, {backgroundColor: "#04ffff"}]}>
            <Text>My Message skjakjsakj skja jskaj skjakjskjaksjk jksja jskajk jksjak jskaj kjskaj skjak jskaj ksj kajsk jakjs kajs kjak sjak jskaj sk</Text>
          </View>
          <Text style={styles.messageStatus}>12:45</Text>
        </View>
      </View>
      <View style={styles.sendMessageView}>
        <View style={styles.contentView}>
          <TextInput numberOfLines={6} multiline placeholder='type here' style={styles.massageInput} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Chat
