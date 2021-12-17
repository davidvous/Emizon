// constants
const GET_CART = "cart/GET_CART";
const ADD_ONE_CART = "cart/ADD_ONE_CART";

// action creators
const showCart = (cart) => ({
  type: GET_CART,
  payload: cart,
});

const addOneCart = (payload) => {
  return {
    type: ADD_ONE_CART,
    payload,
  };
};

const initialState = {};

// thunks
export const getCart = (userId) => async (dispatch) => {
  const cart = await fetch(`/api/${userId}/cart`);
  const data = await cart.json();
  const formattedData = data.Cart_item;
  dispatch(showCart(formattedData));
};

export const addCart = (id, userId, item) => async (dispatch) => {
  const response = await fetch(`/api/${userId}/cart/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOneCart(data));
  }
};

// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CART:
      newState = {};
      action.payload.forEach((cart_item, idx) => (newState[idx] = cart_item));
      return newState;
    case ADD_ONE_CART:
      console.log(action.payload)
      // newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    default:
      return state;
  }
}
