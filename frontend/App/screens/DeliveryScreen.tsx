import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../store/store";
import AndroidSafeAreaView from "../components/AndroidSafeAreaView";
import AppText from "../components/AppText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import App, { RootStackParams } from "../../App";

const DeliveryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const restaurant = useAppSelector((state) => state.restaurant.retaurant);
  return (
    <SafeAreaView style={AndroidSafeAreaView} className="flex-1 bg-[#00CCBB]">
      <View className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View>
              <AntDesign name="closecircle" size={30} color="white" />
            </View>
          </TouchableOpacity>
          <AppText Classes="text-lg font-vazir text-white">
            پشتیبانی سفارش
          </AppText>
        </View>
        <View className="z-50 mx-5 my-2 rounded-md bg-white p-6 shadow-md">
          <View className="flex-row items-center justify-between">
            <Animatable.Image
              source={require("../../assets/driver.gif")}
              animation="slideInUp"
              iterationCount={1}
              className="h-28 w-28"
            />
            <View>
              <AppText Classes="text-lg text-gray font-vazir">
                زمان تقریبی رسیدن
              </AppText>
              <AppText Classes="text-2xl font-vazirBold">40-55 دقیقه</AppText>
            </View>
          </View>

          <AppText Classes="font-vazir mt-2">
            سفارش شما در {restaurant.name} درحال آماده سازی است.
          </AppText>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="z-0 -mt-10 flex-1"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="h-28 flex-row items-center justify-between space-x-5 bg-white">
        <AppText Classes="ml-5 text-lg font-vazirBold text-[#00CCBB]">
          تماس
        </AppText>
        <View>
          <AppText Classes="text-lg font-vazir text-center">رضا قهرمانی اصل</AppText>
          <AppText Classes="text-gray-400 font-vazir text-center">راننده شما</AppText>
        </View>
        <Image
          className="mr-5 h-12 w-12 rounded-full bg-gray-300 p-4"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
