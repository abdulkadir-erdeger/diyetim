import { StyleSheet } from "react-native";

const baseStyle = {
  position: "absolute",
  right: 20,
  bottom: 20,
  backgroundColor: "#7ecb20",
  alignItems: "center",
  justifyContent: "center",
  width: 70,
  height: 70,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: "#b2ff59",
};

export default StyleSheet.create({
  activeContainer: {
    ...baseStyle,
    backgroundColor: "#7ecb20",
    borderColor: "#b2ff59",
  },
  passiveContainer: {
    ...baseStyle,
    backgroundColor: "grey",
    borderColor: "lightgrey",
  },
});
