import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import AndroidSafeArea from "../components/AndroidSafeAreaView";


const HomeScreen = () => {
  return (
    <View style={AndroidSafeArea}>
      <Text className="text-lg font-bold text-red-500 underline">
        Hello World!
      </Text>
    </View>
  );
};

export default HomeScreen;
