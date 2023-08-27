import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface restaurantState {
  retaurant: IRestaurant;
}

const initialState: restaurantState = {
  retaurant: {
    name: "",
    _id: "",
    shortDescription: "",
    address: "",
    image: "",
    lat: 0,
    lng: 0,
    rating: 0,
    category: {
      name: "",
      image: "",
      _id: "",
    },
    dishes: [],
  },
};

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurant>) => {
      state.retaurant = action.payload;
    },
  },
});

export default RestaurantSlice.reducer;
export const { setRestaurant } = RestaurantSlice.actions;
