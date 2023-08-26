import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./AppText";
import RestaurantCard from "./RestaurantCard";

interface IFeaturedRowProps {
  id: string;
  title: string;
  desc: string;
  restaurants: IRestaurant[];
}

const FeaturedRow = ({ desc, id, title, restaurants }: IFeaturedRowProps) => {
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <View>
          <AntDesign name="arrowleft" size={24} color="#00CCBB" />
        </View>
        <AppText Classes="text-lg font-vazirBold">{title}</AppText>
      </View>
      <AppText Classes="text-xs text-gray-500 font-vazir text-right">
        {desc}
      </AppText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant._id} {...restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
