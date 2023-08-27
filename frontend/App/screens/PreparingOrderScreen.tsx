import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";
import AndroidSafeAreaView from "../components/AndroidSafeAreaView";
import AppText from "../components/AppText";

const PreparingOrderScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);

    return () => {
      timer;
    };
  }, []);

  return (
    <SafeAreaView
      style={AndroidSafeAreaView}
      className="flex-1 items-center justify-center bg-[#00CCBB]"
    >
      <Animatable.Image
        source={require("../../assets/order-loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-center font-bold text-white"
      >
        <AppText Classes="font-vazirBold text-center text-lg">
          در انتظار پذیرش سفارس توسط رستوران!
        </AppText>
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
