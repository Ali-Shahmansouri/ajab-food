import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";

const RestaurantCard = ({
  _id,
  address,
  dishes,
  image,
  lat,
  lng,
  name,
  category,
  rating,
  shortDescription,
}: IRestaurant) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const _resturantScreenDetails: IRestaurant = {
    _id,
    address,
    dishes,
    image,
    lat,
    lng,
    name,
    category,
    rating,
    shortDescription,
  };
  return (
    <TouchableOpacity
      className="ml-5 bg-white shadow"
      onPress={() => navigation.navigate("Restaurant", _resturantScreenDetails)}
    >
      <Image
        className="h-36 w-full rounded-sm"
        style={{ minWidth: 256 }}
        source={{
          uri: `http://192.168.137.1:8000/uploads/Restaurants/${image}`,
        }}
      />
      <View className="px-3 pb-4">
        <AppText Classes="pt-2 text-lg font-vazirBold text-right">
          {name}
        </AppText>
        <View className="flex-row items-center justify-end gap-x-1">
          <AppText Classes="text-xs text-gray-500 font-vazir mt-2">
            {category.name} •{" "}
            <AppText Classes="text-green-500 font-vazir">{rating}</AppText>
          </AppText>
          <View>
            <AntDesign
              name="star"
              size={24}
              color="green"
              style={{ opacity: 0.5 }}
            />
          </View>
        </View>
        <View className="mt-2 flex-row items-center justify-end gap-x-1">
          <AppText Classes="text-xs text-gray-500 font-vazir">
            {address} • همین اطراف
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
