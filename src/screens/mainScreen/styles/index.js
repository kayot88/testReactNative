import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
    flexDirection: "column",
  },
  photoView: {
    borderWidth: 2,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
  },
  photo: {
    height: 100,
    width: "100%",
  },
  photoName: {
    textAlign: "center",
    alignItems: "center",

    fontWeight: "bold",
    fontSize: 15,
  },
  userName: {
    display: "flex",
    fontSize: 15,
    textAlign: "center",
    alignItems: "center",
  },

});
