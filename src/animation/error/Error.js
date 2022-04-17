import LottieView from "lottie-react-native";

import React from "react";

export default function Error() {
  return (
    <LottieView source={require("../../asset/error.json")} autoPlay loop />
  );
}
