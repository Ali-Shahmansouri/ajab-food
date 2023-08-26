import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";
import AndroidSafeAreaView from "../components/AndroidSafeAreaView";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import AppText from "../components/AppText";
import DishRow from "../components/DishRow";

type Props = NativeStackScreenProps<RootStackParams, "Restaurant">;

const RestaurantScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const {
    _id,
    address,
    category,
    dishes,
    image,
    lat,
    lng,
    name,
    rating,
    shortDescription,
  } = route.params;
  return (
    <>
      <ScrollView style={AndroidSafeAreaView}>
        <View className="relative">
          <Image
            className="h-56 w-full bg-gray-300 p-4"
            source={{
              uri: `http://192.168.137.1:8000/uploads/Restaurants/${image}`,
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute left-5 top-14 rounded-full bg-gray-100 p-2"
          >
            <View>
              <AntDesign name="arrowleft" size={24} color="#00CCBB" />
            </View>
          </TouchableOpacity>

          <View className="bg-white">
            <View className="items-end px-4 pt-4">
              <AppText Classes="text-3xl font-vazirBold">{name}</AppText>
              <View className="my-1 flex-row items-center space-x-2">
                <View className="flex-row items-center gap-x-1">
                  <AppText Classes="text-xs text-gray-500 font-vazir mt-2">
                    {address} • همین اطراف
                  </AppText>
                </View>
                <View className="flex-row items-center gap-x-1">
                  <AppText Classes="text-xs text-gray-500 font-vazir mt-2">
                    {category.name} •{" "}
                    <AppText Classes="text-green-500 font-vazir">
                      {rating}
                    </AppText>
                  </AppText>
                  <View>
                    <AntDesign
                      name="star"
                      size={24}
                      color="green"
                      style={{
                        opacity: 0.5,
                      }}
                    />
                  </View>
                </View>
              </View>
              <AppText Classes="mt-2 pb-4 text-gray-500 font-vazir">
                {shortDescription}
              </AppText>
            </View>
          </View>

          <TouchableOpacity className="flex-row items-center justify-end gap-x-2 border-y border-gray-300 bg-white p-4">
            <View>
              <Entypo name="chevron-left" size={24} color="#00BBCC" />
            </View>
            <AppText Classes="text-end mr-2 flex-1 font-vazirBold">
              حساسیت غذایی دارید؟
            </AppText>
            <View>
              <AntDesign
                name="questioncircle"
                size={24}
                color="gray"
                style={{ opacity: 0.6 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <AppText Classes="mb-3 px-4 pt-6 text-xl font-vazirBold">
            فهرست
          </AppText>
          {dishes?.map((d) => <DishRow key={d._id} {...d} />)}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
