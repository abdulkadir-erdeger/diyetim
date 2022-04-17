import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./Button.styles";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
