import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./FoodInput.styles";

export default function FoodInput({
  title,
  onFoodValue,
  onFoodChange,
  onNutritiveValue,
  onNutritiveChange,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMain}>{title}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.horizontalContainer}>
          <Text style={styles.title}>Yemek</Text>
          <TextInput
            placeHolder="Yemek giriniz.."
            style={styles.inputContainer}
            onChangeText={onFoodChange}
            value={onFoodValue}
          />
        </View>

        <View style={styles.horizontalContainer}>
          <Text style={styles.title}>Besin Değeri</Text>
          <TextInput
            placeHolder="Besin değeri giriniz"
            style={styles.inputContainer}
            onChangeText={onNutritiveChange}
            value={onNutritiveValue.toString()}
          />
        </View>
      </View>
    </View>
  );
}
