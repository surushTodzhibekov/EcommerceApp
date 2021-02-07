import {PRODUCT} from '../../data/dummy-data';

const initialState = {
  product: PRODUCT,
  filteredProduct: PRODUCT,
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
