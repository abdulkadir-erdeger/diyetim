import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -15,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: -40,
  },
  innerContainer: {},
  buton: {
    backgroundColor: "#7ecb20",
    marginBottom: 10,
    padding: 2,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  butonText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
});
