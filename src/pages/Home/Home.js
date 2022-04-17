import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import FloatButton from "../../compenent/FloatButton";
import styles from "./Home.styles";
import { ProgressChart } from "react-native-chart-kit";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import calorieCalculator from "../../hook/calorieCalculator";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Home({ navigation }) {
  const [dataMenu, setDataMenu] = useState(null);
  const [alarm, setAlarm] = useState(false);
  const dispatch = useDispatch();
  const { calori } = calorieCalculator(dataMenu);
  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [second, setSecond] = useState();

  if (dataMenu != null) {
    charData = (2000 / 100) * (0.1 / calori);
  } else {
    charData = 0;
  }

  const Sil = () => {
    dispatch({ type: "REMOVE_MENU" });
    fetchData();
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [navigation])
  );

  const fetchData = async () => {
    const jsonValue = await AsyncStorage.getItem("@MENU");
    if (jsonValue != null) {
      setDataMenu(jsonValue);
    } else {
      setDataMenu(null);
    }
  };

  const data = {
    // labels: ["", "", ""],
    data: [, , charData],
  };

  const width = Dimensions.get("window").width; // from react-native
  const height = 220;
  const chartConfig = {
    backgroundGradientFrom: "#e7ff8c",
    backgroundGradientTo: "#e7ff8c",
    color: (opacity = 1) => `rgba(126, 203, 32, ${opacity})`,
  };

  const update = () => {
    setHour(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSecond(new Date().getSeconds());
  };

  useEffect(() => {
    let ogun;
    if (alarm) {
      if (hour == 8 && minutes == 0 && second == 0) {
        ogun = "Kahvaltı";
        runNotifi({ ogun });
      }
      if (hour == 11 && minutes == 0 && second == 0) {
        ogun = "Ara Öğün";
        runNotifi({ ogun });
      }
      if (hour == 14 && minutes == 0 && second == 0) {
        ogun = "Öğle Yemeği";
        runNotifi({ ogun });
      }
      if (hour == 17 && minutes == 0 && second == 0) {
        ogun = "Ara Öğün";
        runNotifi({ ogun });
      }
      if (hour == 20 && minutes == 0 && second == 0) {
        ogun = "Akşam Yemeği";
        runNotifi({ ogun });
      }
    }

    setInterval(function () {
      update();
    }, 1000);
  });

  const FloatButtonChange = async () => {
    setAlarm(!alarm);
  };

  const runNotifi = async ({ ogun }) => {
    await schedulePushNotification({ ogun });
  };

  async function schedulePushNotification({ ogun }) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hatırlatma",
        body: `${ogun} Saatin Geldi`,
      },
      trigger: null,
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7ecb20" barStyle="dark-content" />
      <View style={styles.chartContainer}>
        <Text style={styles.chartHeader}>Besin Değeri</Text>
        <ProgressChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
        <Text style={styles.kalori}>Kalori</Text>
      </View>
      {dataMenu == null ? (
        <TouchableOpacity onPress={() => navigation.navigate("CreateMenuPage")}>
          <View style={styles.programContainer}>
            <View style={styles.image}>
              <Image
                source={require("../../../assets/dietLogo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.text}>Diyet Programı Oluştur</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => Sil()}>
          <View style={styles.programContainer}>
            <View style={styles.image}>
              <Image
                source={require("../../../assets/dietLogo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.text}>Diyet Programı Sil</Text>
          </View>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("RaporPage")}>
        <View style={styles.programContainer}>
          <View style={styles.image}>
            <Image
              source={require("../../../assets/reportLogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text}>Rapor Görüntüle</Text>
        </View>
      </TouchableOpacity>
      <FloatButton onPress={FloatButtonChange} change={alarm} />
    </View>
  );
}
