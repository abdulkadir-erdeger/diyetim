import { TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./FloatButton.styles";

export default function FloatButton({ onPress, change = 1 }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={change ? styles.activeContainer : styles.passiveContainer}
    >
      {change ? (
        <MaterialCommunityIcons name="alarm-plus" size={45} color="white" />
      ) : (
        <MaterialCommunityIcons name="alarm-off" size={45} color="white" />
      )}
    </TouchableOpacity>
  );
}
