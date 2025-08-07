import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    image: "https://shorturl.at/QvV6E",
    description: "A high-performance laptop for professionals.",
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    image: "https://shorturl.at/8pnUQ",
    description: "A sleek smartphone with a great camera.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    image: "https://shorturl.at/Y3A3D",
    description: "High-quality headphones for music lovers.",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { name, price, image, description } = action.payload;
      state.push({
        id: Date.now(),
        name,
        price: Number(price),
        image,
        description,
      });
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
