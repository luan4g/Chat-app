import { Dimensions, StyleSheet } from 'react-native'

const screenHigh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: '12%',
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "100%",
  },

  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  userDotStatus: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: "#00ff00",
    borderWidth: 2,
    borderColor: "#fff",
    bottom: 0,
    right: 0,
  },

  userName: {
    fontSize: 16,
  },

  userStatus: {
    marginTop: 4,
    fontSize: 10,
    color: "#242424"
  },

  userCall: {
    flexDirection: "row",
    marginLeft: "auto",
    width: 100,
    justifyContent: "space-around"
  },
  
  messagesView: {
    justifyContent: "flex-end",
    width: "100%",
    height: "76%",
    paddingBottom: 16,
    backgroundColor: "#f6f6f6"
  },

  message :{
    borderRadius: 8,
    padding: 8,
    maxWidth: '60%',
  },

  messageStatus: {
    marginTop: 2,
    fontSize: 10,
  },

  sendMessageView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 16,
  },

  contentView: {
    alignItems: 'flex-start',
    justifyContent: "center",
    width: "90%",
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 16,
  },

  massageInput: {
    width: '90%'
  }
})

export default styles;