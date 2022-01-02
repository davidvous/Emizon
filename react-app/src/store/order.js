// constants
const GET_ORDERS = "orders/GET_ORDERS";
const ADD_ORDER_ADDRESS = "orders/ADD_ORDER_ADDRESS"
const UPDATE_ORDER_ADDRESS = "orders/UPDATE_ORDER_ADDRESS";

// action creators
const showOrders = (orders) => ({
  type: GET_ORDERS,
  payload: orders,
});

const addOrderAddress = (payload) => ({
  type: ADD_ORDER_ADDRESS,
  payload,
});

const updateOrderAddress = (payload) => ({
  type: UPDATE_ORDER_ADDRESS,
  payload,
});

const initialState = {};

// thunks
export const getOrders = (userId) => async (dispatch) => {
  if (userId) {
    const res = await fetch(`/api/orders/${userId}/`);
    if (res.ok) {
      const data = await res.json();
      const formattedData = data.user_orders;
      return dispatch(showOrders(formattedData));
    }
  } else {
    return ["The user needs to log in."];
  }
};

export const newOrderAddress =
  (user_id, address, city, state, zipCode, first_name, last_name) => async (dispatch) => {
    const response = await fetch(`/api/orders/${user_id}/new/address/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, address, city, state, zipCode, first_name, last_name }),
    });
    if (response.ok) {
      const data = await response.json();
      return dispatch(addOrderAddress(data));
    }
  };

export const editOrderAddress =
  (user_id, address, city, state, zipCode, first_name, last_name) =>
  async (dispatch) => {
    const response = await fetch(`/api/orders/${user_id}/new/address/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        address,
        city,
        state,
        zipCode,
        first_name,
        last_name,
      }),
    });
    console.log("THIS IS THE RESPONSE of the address>>>>", response);
    if (response.ok) {
      const addressChange = await response.json();
      dispatch(updateOrderAddress(addressChange));
      return addressChange;
    }
  };

// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ORDERS:
      newState = {};
      action.payload.forEach((each, idx) => (newState[each.id] = each));
      return newState;
    case ADD_ORDER_ADDRESS:
      newState = {};
      newState = {
        ...state,
        [action.payload.Added_Address.id]: action.payload.Added_Address,
      };
      return newState;
    case UPDATE_ORDER_ADDRESS:
      newState = {
        ...state,
        [action.payload.Edited_Address.id]: action.payload.Edited_Address,
      };
      return newState;
    default:
      return state;
  }
}
