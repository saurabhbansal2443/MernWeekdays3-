import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      // productData
      let productData = action.payload;
      // console.log( "productData " , productData );
      let pid = productData.id;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      console.log(existingProductIdx);
      if (existingProductIdx != -1) {
        let existingProduct = state.cart[existingProductIdx];
        existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        let cartObj = { data: productData, quantity: 1 };
        state.cart.push(cartObj);
      }
    },
    removeCart: (state, action) => {
      // product.id
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      state.cart.splice(existingProductIdx, 1);
    },
    QunatityIncrease: (state, action) => {
      // id
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );

      let existingProduct = state.cart[existingProductIdx];
      existingProduct.quantity = existingProduct.quantity + 1;
    },
    QunatityDecrese: (state, action) => {
      //id
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );

      let existingProduct = state.cart[existingProductIdx];

      if (existingProduct.quantity > 1) {
        existingProduct.quantity = existingProduct.quantity - 1;
      } else {
        state.cart.splice(existingProductIdx, 1);
      }
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
    AscendingRating: (state) => {
      let cartItems = state.cart;

      cartItems.sort((a, b) => {
        return a.data.rating - b.data.rating;
      });

      state.cart = cartItems;
    },
    DesecndingRating: (state) => {
      let cartItems = state.cart;

      cartItems.sort((a, b) => {
        return b.data.rating - a.data.rating;
      });

      state.cart = cartItems;
    },
  },
});

export const {
  addCart,
  removeCart,
  QunatityIncrease,
  QunatityDecrese,
  clearCart,
  AscendingRating,
  DesecndingRating
} = CartSlice.actions;

export default CartSlice.reducer;
