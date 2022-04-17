import LottieView from "lottie-react-native";

import React from "react";

export default function Loading() {
  return (
    <LottieView source={require("../../asset/loading.json")} autoPlay loop />
  );
}
