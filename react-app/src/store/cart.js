// constants
const GET_CART = "cart/GET_CART";
const ADD_ONE_CART = "cart/ADD_ONE_CART";
const REMOVE_ENTIRE_LINE_CART = "cart/REMOVE_ONE_LINE_CART";
const UPDATE_CART = "cart/UPDATE_CART";

// action creators
const showCart = (cart) => ({
  type: GET_CART,
  payload: cart,
});

const addOneCart = (payload) => ({
    type: ADD_ONE_CART,
    payload,
  });

const removeEntireLine = (payload) => {
    return {
      type: REMOVE_ENTIRE_LINE_CART,
      payload,
    };
}

const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

const initialState = {};

// thunks
export const getCart = (userId) => async (dispatch) => {
  if (userId) {
    const res = await fetch(`/api/${userId}/cart/`);
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
  const response = await fetch(`/api/${user}/cart/${item}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"product_id": item, "user_id": user})
  });
  if (response.ok) {
    const data = await response.json();
    return dispatch(addOneCart(data));
  }
};

export const deleteCartLine = (user, item) => async (dispatch) => {
  await fetch(`/api/${user}/cart/${item}/all/`, {
    method: "DELETE",
  });
  return dispatch(removeEntireLine(item));
};

export const updateOneCart = (user, item, data) => async (dispatch) => {
  const response = await fetch(`/api/${user}/cart/${item}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const cart_item = await response.json();
    dispatch(updateCart(cart_item));
    return cart_item;
  }
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
    case UPDATE_CART:
      newState = { ...state, [action.payload.product_id]: action.payload };
      return newState;
    default:
      return state;
  }
}
