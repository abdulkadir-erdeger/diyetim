import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    width: width / 1.1,
    height: height / 5.1,
    flex: 1,
    borderColor: "#7ecb20",
    backgroundColor: "#7ecb20",
  },
  innerContainer: {
    backgroundColor: "white",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 5,
  },
  titleMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    flex: 1,
    height: 30,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    marginStart: 5,
  },
  horizontalContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "400" },
});
