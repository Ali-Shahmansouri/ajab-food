import { View, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { fetchAllFeaturedCategories } from "../services/request";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Categories from "../components/Categories";
import AppTextInput from "../components/AppInputText";
import FeaturedRow from "../components/FeaturedRow";
import AndroidSafeAreaView from "../components/AndroidSafeAreaView";

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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={AndroidSafeAreaView} className="bg-white">
      <View className="flex-row items-center justify-between px-4 py-3">
        <View>
          <AntDesign name="user" size={35} color="#00CCBB" />
        </View>
        <View className="flex-row items-center gap-2">
          <View>
            <AppText Classes="text-xs font-vazirBold text-gray-400">
              هم اکنون سفارش دهید!
            </AppText>
            <View className="flex-row items-center justify-center">
              <View>
                <Entypo name="chevron-down" size={20} color="#00CCBB" />
              </View>
              <AppText Classes="text-lg font-vazirBold font-">
                موقیت کنونی شما
              </AppText>
            </View>
          </View>
          <Image
            className="h-7 w-7 rounded-full p-4"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
        </View>
      </View>

      <View className="flex-row items-center gap-x-2 px-4 pb-2">
        <View>
          <MaterialIcons
            name="settings-input-component"
            size={25}
            color="#00CCBB"
          />
        </View>
        <View className="flex-1 flex-row items-center justify-end gap-x-2 bg-gray-200 py-2 pr-2">
          <AppTextInput
            placeHolder="رستوران ها و آشپزخانه ها "
            Classes="font-vazir flex-1"
            keyBoardType="default"
          />
          <View className="">
            <AntDesign name="search1" size={24} color="gray" />
          </View>
        </View>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <Categories />
        {featuredCategories?.map((fcat) => (
          <FeaturedRow
            key={fcat._id}
            id={fcat._id}
            title={fcat.title}
            desc={fcat.shortDescription}
            restaurants={fcat.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
