import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#7ecb20",
  },
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
});
