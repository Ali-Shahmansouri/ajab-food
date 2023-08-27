import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface basketState {
  items: IDish[];
}

const initialState: basketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDish>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((i) => i._id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;