import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  chartContainer: {
    backgroundColor: "#e7ff8c",
    borderRadius: 10,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: { borderRadius: 10 },
  chartHeader: { fontSize: 20, fontWeight: "700", marginTop: 10 },
  kalori: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold",
    color: "#7ecb20",
    start: width * 0.34,
    top: 135,
  },
  programContainer: {
    alignItems: "center",

    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7ecb20",
    width: width * 0.9,
    marginTop: 10,
    height: height * 0.15,
    backgroundColor: "#e7ff8c",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 36,
    width: 70,
    height: 70,
    backgroundColor: "white",
    marginStart: 10,
  },
  logo: {
    width: 55,
    height: 55,
  },
  text: { marginStart: 15, fontSize: 16, fontWeight: "500" },
});
