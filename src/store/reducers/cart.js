import CartItem from '../../models/cart-item';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/orders';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodImage = addedProduct.imageUrl;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        //Already added cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          prodImage,
          state.items[addedProduct.id].sum + prodPrice,
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodImage,
          prodPrice,
        );
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + prodPrice,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      let updatedCartItems;
      const currentQty = selectedCartItem.quantity;
      if (currentQty > 1) {
        //need to reduce it not to erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.productImage,
          selectedCartItem.sum - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        //remove it from item
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
    case ADD_ORDER:
      return initialState;
  }
  return state;
};
