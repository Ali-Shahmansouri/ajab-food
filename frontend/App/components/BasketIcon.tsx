import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useAppSelector } from "../store/store";
import AppText from "./AppText";

const BasketIcon = () => {
  const items = useAppSelector((state) => state.basket.items);
  const basketTotal = useAppSelector((state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0),
  );

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity className="mx-5 flex-row items-center justify-between rounded-lg bg-[#00CCBB] p-4">
        <AppText Classes="text-lg font-vazirBold text-white">
          {basketTotal.toLocaleString()} تومان
        </AppText>
        <AppText Classes="text-lg mr-3 font-vazirBold text-white">
          مشاهده سبد خرید
        </AppText>
        <AppText Classes="bg-[#01A296] px-2 py-1 text-lg font-vazirBold text-white">
          {items.length}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
