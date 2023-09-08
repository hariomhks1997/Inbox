import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    changed: false,
    quantity:0
  },
  reducers: {
    replaceCart(state, action) {
      console.log(action.payload)
      
      state.items=[action.payload,...state.items]
    },
    addarray(state,action){
   state.items=action.payload
   state.changed=true;
    },
    Quantity(state,action){
      state.quantity=action.payload
    },
    sentItemToCart(state, action) {
      const newItem = action.payload;
      
      
      const existingItem = state.items.find((item) => item.id === newItem.id);
         state.changed=true;
      if (!existingItem) {
        // state.items.push({
        //   id: newItem.id,
        //   subject: newItem.subject,
        //   email: newItem.email,
        //   text:newItem.text,
        //   date:newItem.date,
        //   sent:newItem.sent
        // });
        state.items=[{
          id: newItem.id,
          subject: newItem.subject,
          email: newItem.email,
          text:newItem.text,
          date:newItem.date,
          sent:newItem.sent,
          read:newItem.read,
          quantity:newItem.quantity
        },...state.items
        ]
      
      } else {
        
        existingItem.read = newItem.read
        existingItem.quantity=newItem.quantity
      }
    },
    removesentItemFromCart(state, action) {
      // const id = action.payload;
      // const existingItem = state.items.find((item) => item.id === id.id);
      // state.totalQuantity--;
      // state.changed = true;
      // if (existingItem.quantity === 1) {
      //   state.items = state.items.filter((item) => item.id !== id.id);
      // } else {
      //   existingItem.quantity--;
      //   existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      // }
      const id = action.payload;
      if(state.quantity>0 && id.read==='blue'){
        state.quantity=state.quantity-1;
      }
     
      state.items = state.items.filter((item) => item.id !== id.id);
      
      state.changed=true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;