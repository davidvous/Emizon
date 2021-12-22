// constants
const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_ONE_PROD = "products/GET_ONE_PROD";

// action creators
const showProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

const showOneProduct = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
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
  const formattedData = data.products;
  dispatch(showOneProduct(formattedData));
};

// reducer
export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            newState = {}
            action.payload.forEach(product => newState[product.id] = product)
            return newState
        default:
            return state;
    }
}
