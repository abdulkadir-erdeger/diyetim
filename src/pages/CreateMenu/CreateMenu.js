import React, { useState, useEffect } from "react";
import { Alert, ScrollView, View, Modal, Button } from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import styles from "./CreateMenu.styles";
import MenuForm from "../../compenent/MenuForm/MenuForm";

export default function CreateMenu({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [day, setDay] = useState(0);

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  const onNextStep = () => {
    console.log("next");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    navigation.navigate("HomePage");
  };

  const modal = (
    <Modal
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={{ alignItems: "center", paddingTop: 40 }}>
        <ScrollView>
          <MenuForm id={day} mVisible={(i) => setModalVisible(i)} />
          <Button title="Çık" onPress={() => setModalVisible(false)} />
        </ScrollView>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {modal}
      <ProgressSteps
        progressBarColor="#7ecb20"
        activeStepIconBorderColor="#7ecb20"
        completedProgressBarColor="#7ecb20"
        completedStepIconColor="#7ecb20"
        activeLabelColor="#7ecb20"
      >
        <ProgressStep
          label="1. Gün"
          onNext={onNextStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnText={"İleri"}
          nextBtnTextStyle={styles.butonText}
          nextBtnStyle={styles.buton}
        >
          <Button
            title="Oluştur"
            onPress={() => {
              setDay(1), setModalVisible(true);
            }}
          />
        </ProgressStep>

        <ProgressStep
          label="2. Gün"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnText={"İleri"}
          previousBtnText={"Geri"}
          nextBtnTextStyle={styles.butonText}
          previousBtnTextStyle={styles.butonText}
          nextBtnStyle={styles.buton}
          previousBtnStyle={styles.buton}
        >
          <Button
            title="Oluştur"
            onPress={() => {
              setDay(2), setModalVisible(true);
            }}
          />
        </ProgressStep>
        <ProgressStep
          label="3. Gün"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnText={"İleri"}
          previousBtnText={"Geri"}
          nextBtnTextStyle={styles.butonText}
          previousBtnTextStyle={styles.butonText}
          nextBtnStyle={styles.buton}
          previousBtnStyle={styles.buton}
        >
          <Button
            title="Oluştur"
            onPress={() => {
              setDay(3), setModalVisible(true);
            }}
          />
        </ProgressStep>
        <ProgressStep
          label="4. Gün"
          onPrevious={onPrevStep}
          onNext={onNextStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnText={"İleri"}
          previousBtnText={"Geri"}
          nextBtnTextStyle={styles.butonText}
          previousBtnTextStyle={styles.butonText}
          nextBtnStyle={styles.buton}
          previousBtnStyle={styles.buton}
        >
          <Button
            title="Oluştur"
            onPress={() => {
              setDay(4), setModalVisible(true);
            }}
          />
        </ProgressStep>
        <ProgressStep
          label="5. Gün"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
          previousBtnText={"Geri"}
          finishBtnText={"Bitir"}
          nextBtnTextStyle={styles.butonText}
          previousBtnTextStyle={styles.butonText}
          nextBtnStyle={styles.buton}
          previousBtnStyle={styles.buton}
        >
          <Button
            title="Oluştur"
            onPress={() => {
              setDay(5), setModalVisible(true);
            }}
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}
