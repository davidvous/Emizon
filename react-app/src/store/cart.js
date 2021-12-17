// constants
const GET_CART = "cart/GET_CART";

// action creators
const showCart = (cart) => ({
  type: GET_CART,
  payload: cart,
});

const initialState = {};

// thunks
export const getCart = (id) => async (dispatch) => {
  const cart = await fetch(`/api/cart/${id}`);
  const data = await cart.json();
  const formattedData = data.Cart_item;
  dispatch(showCart(formattedData));
};

// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CART:
      newState = {};
      action.payload.forEach((cart_item, idx) => (newState[idx] = cart_item));
      return newState;
    default:
      return state;
  }
}
