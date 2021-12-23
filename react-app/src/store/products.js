// constants
const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_ONE_PROD = "products/GET_ONE_PROD";

// action creators
const showProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

const showOneProduct = (payload) => ({
  type: GET_ONE_PROD,
  payload,
});

const initialState = {};

// thunks
export const getProducts = () => async dispatch => {
  const products = await fetch(`/api/products`)
  const data = await products.json()
  const formattedData = data.products
  dispatch(showProducts(formattedData));
}

export const getOneProduct = (id) => async (dispatch) => {
  const product = await fetch(`/api/products/${id}`);
  const data = await product.json();
  console.log("individual product>>>>>", data)
  dispatch(showOneProduct(data));
};

// reducer
export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            newState = {}
            action.payload.forEach(product => newState[product.id] = product)
            return newState
        case GET_ONE_PROD:
            newState = {}
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state;
    }
}
