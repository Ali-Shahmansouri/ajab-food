import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppText from "./AppText";

interface ICategoryCardProp {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: ICategoryCardProp) => {
  return (
    <TouchableOpacity className="relative mr-2 items-center">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: `http://192.168.137.1:8000/uploads/Categories/${image}`,
        }}
      />
      <AppText Classes="font-vazirBold absolute bottom-0.5 text-white">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default CategoryCard;
