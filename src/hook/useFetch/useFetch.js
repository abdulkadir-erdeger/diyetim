/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const jsonValue = await AsyncStorage.getItem("@MENU");
      setDataMenu(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { dataMenu, error, loading };
};

export default useFetch;
