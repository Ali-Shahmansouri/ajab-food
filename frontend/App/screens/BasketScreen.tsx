import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import App, { RootStackParams } from "../../App";
import { useAppDispatch, useAppSelector } from "../store/store";
import AndroidSafeAreaView from "../components/AndroidSafeAreaView";
import AppText from "../components/AppText";
import env from "../../env";
import { removeFromBasket } from "../store/features/basketSlice";

const BasketScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const DELIVERY_FEE = 5.99;

  const restaurant = useAppSelector((state) => state.restaurant.retaurant);
  const items = useAppSelector((state) => state.basket.items);
  const basketTotal = useAppSelector((state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0),
  );
  const dispatch = useAppDispatch();

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<any>([]);

  const initialGroupedItems: any = {};

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, initialGroupedItems);
    setGroupedItemsInBasket(groupedItems);
    console.log(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={AndroidSafeAreaView} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="border-b border-[#00CCBB] bg-white p-5 shadow-sm">
          <View>
            <AppText Classes="text-center font-vazirBold text-lg">
              سبد خرید
            </AppText>
            <AppText Classes="text-center font-vazir text-gray-700">
              {restaurant.name}
            </AppText>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute left-5 top-6 items-center rounded-full"
          >
            <View>
              <AntDesign name="closecircle" size={40} color="#00CCBB" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="my-5 flex-row items-center gap-x-4 bg-white px-4 py-3">
          <TouchableOpacity>
            <AppText Classes="text-[#00CCBB] font-vazir">تغیر سفارش</AppText>
          </TouchableOpacity>
          <AppText Classes="flex-1 font-vazirBold">
            تحویل در 50-70 دقیقه
          </AppText>
          <Image
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(
            ([key, items]: [string, any]) => (
              <View
                key={key}
                className="flex-row items-center justify-between bg-white px-4 py-2"
              >
                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <AppText Classes="text-xs text-[#00CCBB] font-vazir">
                    حذف
                  </AppText>
                </TouchableOpacity>
                <View className="flex-row items-center">
                  <AppText Classes="text-gray-600 font-vazir">
                    {items[0]?.price} تومان
                  </AppText>
                  <AppText Classes="ml-4 font-vazir">{items[0]?.name}</AppText>
                  <Image
                    className="ml-4 h-12 w-12 rounded-full"
                    source={{
                      uri: `${env.EXPO_PUBLIC_API_URL}uploads/dishes/${items[0]?.image}`,
                    }}
                  />
                  <AppText Classes="font-vazir ml-4">{items.length}x</AppText>
                </View>
              </View>
            ),
          )}
        </ScrollView>
        <View className="mt-5 space-y-4 bg-white p-5">
          <View className="flex-row justify-between">
            <AppText Classes="text-gray-400 font-vazir">
              {basketTotal} تومان
            </AppText>
            <AppText Classes="text-gray-400 font-vazir">قیمت سفارش ها</AppText>
          </View>

          <View className="flex-row justify-between">
            <AppText Classes="text-gray-400 font-vazir">
              {DELIVERY_FEE} تومان
            </AppText>
            <AppText Classes="text-gray-400 font-vazir">هزینه ارسال</AppText>
          </View>

          <View className="flex-row justify-between">
            <AppText Classes="font-vazir">
              {DELIVERY_FEE + basketTotal} تومان
            </AppText>
            <AppText Classes="font-vazir">قیمت تمام شده</AppText>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => navigation.navigate("PreparingOrder")}
          >
            <AppText Classes="font-vazirBold text-white text-center text-lg">
              ثبت سفارش
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
