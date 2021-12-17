// constants
const GET_CART = "cart/GET_CART";
const ADD_ONE_CART = "cart/ADD_ONE_CART";
const REMOVE_ONE_CART = "cart/REMOVE_ONE_CART";
const REMOVE_ENTIRE_LINE_CART = "cart/REMOVE_ONE_LINE_CART";

// action creators
const showCart = (cart) => ({
  type: GET_CART,
  payload: cart,
});

const addOneCart = (payload) => ({
    type: ADD_ONE_CART,
    payload,
  });

const removeOneCart = (payload) => {
  return {
    type: REMOVE_ONE_CART,
    payload
  };
};

const removeEntireLine = (payload) => {
    return {
      type: REMOVE_ENTIRE_LINE_CART,
      payload,
    };
}

const initialState = {};

// thunks
export const getCart = (userId) => async (dispatch) => {
  if (userId) {
    const res = await fetch(`/api/${userId}/cart`);
    if (res.ok) {
      const data = await res.json();
      const formattedData = data.Cart_item;
      return dispatch(showCart(formattedData));
    }
  } else {
    return ['The user needs to log in.']
  }
};

export const addCart = (user, item) => async (dispatch) => {
  const response = await fetch(`/api/${user}/cart/${item}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"product_id": item, "user_id": user})
  });
  if (response.ok) {
    const data = await response.json();
    return dispatch(addOneCart(data));
  }
};

export const deleteCart = (user, item, quantity) => async (dispatch) => {
  const response = await fetch(`/api/${user}/cart/${item}`, {
    method: "DELETE",
  });
  if (quantity === 1) {
    return dispatch(removeEntireLine(item));
  }
  const data = await response.json();
  return dispatch(removeOneCart(data));
};

// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CART:
      newState = {};
      action.payload.forEach(
        (cart_item, idx) => (newState[cart_item.product_id] = cart_item)
      );
      return newState;
    case ADD_ONE_CART:
      newState = {
        ...state,
        [action.payload.Cart_item.product_id]: action.payload.Cart_item,
      };
      return newState;
    case REMOVE_ENTIRE_LINE_CART:
      newState = { ...state };
      delete newState[action.payload]
      return newState;
    case REMOVE_ONE_CART:
      const product = action.payload.Cart_item
      newState = { ...state, [product.product_id]: product };
      return newState;
    default:
      return state;
  }
}
