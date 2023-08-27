import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./AppText";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addToBasket, removeFromBasket } from "../store/features/basketSlice";
import env from "../../env";

const DishRow = ({ _id, image, name, price, shortDescription }: IDish) => {
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) =>
    state.basket.items.filter((i) => i._id === _id),
  );

  const addItemToBasket = () => {
    dispatch(addToBasket({ _id, image, name, price, shortDescription }));
  };

  const removeItemFromBasket = () => {
    if (items.length > 0) {
      dispatch(removeFromBasket({ id: _id }));
    }
  };

  return (
    <>
      <TouchableOpacity
        className={`boder border-gray-200 bg-white p-4 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => {
          setIsPressed(!isPressed);
        }}
      >
        <View className="flex-row">
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: `${env.EXPO_PUBLIC_API_URL}uploads/Dishes/${image}`,
              }}
            />
          </View>
          <View className="flex-1 items-end pl-2">
            <AppText Classes="mb-1 text-lg font-vazir">{name}</AppText>
            <AppText Classes="text-gray-400 font-vazir">
              {shortDescription}
            </AppText>
            <AppText Classes="mt-2 text-gray-400 font-vazir">
              {price} تومان
            </AppText>
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="flex-row items-center bg-white px-4 pb-3">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemFromBasket}
          >
            <View>
              <AntDesign
                name="minuscircle"
                size={30}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </View>
          </TouchableOpacity>
          <AppText Classes="mx-2">{items.length}</AppText>
          <TouchableOpacity onPress={addItemToBasket}>
            <View>
              <AntDesign
                name="pluscircle"
                size={30}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
