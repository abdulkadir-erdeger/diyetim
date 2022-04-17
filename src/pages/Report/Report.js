import { View, Text, FlatList } from "react-native";
import React from "react";
//import Loading from "../../animation/Loading";
//import Error from "../../animation/error";
import useFetch from "../../hook/useFetch";
import ReportCard from "../../card/Report/ReportCard";
import styles from "./Report.styles";

export default function Report() {
  const { loading, error, dataMenu } = useFetch();

  /* if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }*/

  const handleItem = ({ item }) => <ReportCard veri={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={dataMenu} renderItem={handleItem} />
    </View>
  );
}
