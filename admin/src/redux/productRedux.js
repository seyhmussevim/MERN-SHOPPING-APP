import {createSlice} from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products:[],
        isFettching: false,
        error: false,
    },
    reducers:{
      //GET ALL
      getProductStart:(state)=>{
        state.isFettching = true;
        state.error=false;
      },
      getProductSuccess:(state, action)=>{
        state.isFettching = false;
        state.products= action.payload;
      },
      getProductFailure:(state)=>{
        state.isFettching = false;
        state.error = true;
      },

       //DELETE
       deleteProductStart:(state)=>{
        state.isFettching = true;
        state.error=false;
      },
      deleteProductSuccess:(state, action)=>{
        state.isFettching = false;
        state.products.splice(
            state.products.findIndex((item)=>item._id === action.payload),
        1 );
      },
      deleteProductFailure:(state)=>{
        state.isFettching = false;
        state.error = true;
      },

          //UPDATE
          updateProductStart:(state)=>{
            state.isFettching = true;
            state.error=false;
          },
          updateProductSuccess:(state, action)=>{
            state.isFettching = false;
            state.products[
              state.products.findIndex((item) => item._id === action.payload)]
            = action.payload.product;
          },
          updateProductFailure:(state)=>{
            state.isFettching = false;
            state.error = true;
          },
          
          
          //ADD
          addProductStart:(state)=>{
            state.isFettching = true;
            state.error=false;
          },
          addProductSuccess:(state, action)=>{
            state.isFettching = false;
            state.products.push (action.payload);
              
           
          },
          addProductFailure:(state)=>{
            state.isFettching = false;
            state.error = true;
          },
     
    },
});

export const { 
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure, } = productSlice.actions;
export default productSlice.reducer;
