import { View, Text } from "react-native";
import React from "react";
import styles from "./ReportCard.styles";

export default function ReportCard({ veri }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{veri.id}. Gün Programı</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.mealContainer}>
          <Text style={styles.dataTextHeader}>Kahvalti :</Text>
          <Text style={styles.dataText}>{veri.kahvalti.yemek}</Text>
          <Text style={styles.dataTextHeader}>Besin Değeri :</Text>
          <Text style={styles.dataText}>{veri.kahvalti.bDegeri}</Text>
        </View>
        <View style={styles.mealContainer}>
          <Text style={styles.dataTextHeader}>Ara Öğün :</Text>
          <Text style={styles.dataText}>{veri.firstAraOgun.yemek}</Text>
          <Text style={styles.dataTextHeader}>Besin Değeri :</Text>
          <Text style={styles.dataText}>{veri.firstAraOgun.bDegeri}</Text>
        </View>
        <View style={styles.mealContainer}>
          <Text style={styles.dataTextHeader}>Öğle :</Text>
          <Text style={styles.dataText}>{veri.ogle.yemek}</Text>
          <Text style={styles.dataTextHeader}>Besin Değeri :</Text>
          <Text style={styles.dataText}>{veri.ogle.bDegeri}</Text>
        </View>
        <View style={styles.mealContainer}>
          <Text style={styles.dataTextHeader}>Ara Öğün :</Text>
          <Text style={styles.dataText}>{veri.secondAraOgun.yemek}</Text>
          <Text style={styles.dataTextHeader}>Besin Değeri :</Text>
          <Text style={styles.dataText}>{veri.secondAraOgun.bDegeri}</Text>
        </View>
        <View style={styles.mealContainer}>
          <Text style={styles.dataTextHeader}>Akşam :</Text>
          <Text style={styles.dataText}>{veri.aksam.yemek}</Text>
          <Text style={styles.dataTextHeader}>Besin Değeri :</Text>
          <Text style={styles.dataText}>{veri.aksam.bDegeri}</Text>
        </View>
      </View>
    </View>
  );
}
