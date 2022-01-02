// constants
const GET_ORDERS = "orders/GET_ORDERS";

// action creators
const showOrders = (orders) => ({
  type: GET_ORDERS,
  payload: orders,
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

// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ORDERS:
      newState = {};
      action.payload.forEach(
        (each, idx) => (newState[each.id] = each)
      );
      return newState;
    default:
      return state;
  }
}
