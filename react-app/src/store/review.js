// constants
const GET_REVIEWS = "reviews/GET_REVIEWS";
const GET_ONE_PROD_REVIEW = "reviews/GET_ONE_PROD_REVIEW";
const ADD_REVIEW = "reviews/ADD_REVIEW";

// action creators
const showReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews,
});

const showOneReview = (payload) => ({
  type: GET_ONE_PROD_REVIEW,
  payload,
});

const addReview = (payload) => ({
  type: ADD_REVIEW,
  payload,
});

//

const initialState = {};

// thunks
export const getReviews = () => async (dispatch) => {
  const reviews = await fetch(`/api/reviews/`);
  const data = await reviews.json();
  const formattedData = data.reviews;
  dispatch(showReviews(formattedData));
};

export const getOneReview = (id) => async (dispatch) => {
  const review = await fetch(`/api/products/${id}/reviews/`);
  const data = await review.json();
  dispatch(showOneReview(data));
};

export const addAReview = (product_id, user_id, headline, body, rating) => async (dispatch) => {
  const response = await fetch(`/api/products/${product_id}/reviews/new/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product_id, user_id, headline, body, rating}),
  });
  if (response.ok) {
    const data = await response.json();
    return dispatch(addReview(data));
  }
};


// reducer
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = {};
      action.payload.forEach((review) => (newState[review.id] = review));
      return newState;
    case GET_ONE_PROD_REVIEW:
      newState = {};
      action.payload.specificProdReview.forEach((review,index) => newState[review.user_id] = review )
      return newState;
    case ADD_REVIEW:
      newState = {};
      newState = {...state, [action.payload.Added_Review.user_id]: action.payload.Added_Review}
      return newState;
    default:
      return state;
  }
}
