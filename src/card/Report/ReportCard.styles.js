import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#e7ff8c",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#7ecb20",
    borderRadius: 12,
    borderBottomWidth: 1,
    padding: 3,
  },
  headerText: { fontSize: 20, fontWeight: "500" },
  innerContainer: { padding: 10, flex: 1 },
  dataText: { alignSelf: "flex-end", fontSize: 15 },
  mealContainer: {
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  dataTextHeader: { fontWeight: "bold", paddingLeft: 3, fontSize: 15 },
});
