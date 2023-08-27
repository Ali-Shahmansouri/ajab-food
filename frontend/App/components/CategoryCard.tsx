import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import env from "../../env";

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
          uri: `${env.EXPO_PUBLIC_API_URL}uploads/Categories/${image}`,
        }}
      />
      <AppText Classes="font-vazirBold absolute bottom-0.5 text-white">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default CategoryCard;
