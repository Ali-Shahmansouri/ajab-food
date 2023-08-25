import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import fetchAllCategories from "../services/request/Category";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function getAllFeaturedCategories() {
      try {
        const data = await fetchAllCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllFeaturedCategories();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          image={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
