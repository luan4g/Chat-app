import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 80,
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
  }
})

export default styles;