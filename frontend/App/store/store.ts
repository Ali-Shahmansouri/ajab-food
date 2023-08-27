import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./features/restaurantSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { BasketSlice } from "./features/basketSlice";
export const store = configureStore({
  reducer: {
    restaurant: RestaurantSlice.reducer,
    basket: BasketSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
