import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import AndroidSafeArea from "../components/AndroidSafeAreaView";
import { fetchAllFeaturedCategories } from "../services/request";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState<
    IFeaturedCategory[]
  >([]);

  useEffect(() => {
    getAllFeaturedCategories();
  }, []);

  async function getAllFeaturedCategories() {
    try {
      const data = await fetchAllFeaturedCategories();
      setFeaturedCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={AndroidSafeArea}>
      <Text className="text-lg font-bold text-red-500 underline">
        Hello World!
      </Text>
    </View>
  );
};

export default HomeScreen;
