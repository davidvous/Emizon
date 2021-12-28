// constants
const GET_REVIEWS = "reviews/GET_REVIEWS";
const GET_ONE_PROD_REVIEW = "reviews/GET_ONE_PROD_REVIEW";

// action creators
const showReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews,
});

const showOneReview = (payload) => ({
  type: GET_ONE_PROD_REVIEW,
  payload,
});

const initialState = {};

// thunks
export const getReviews = () => async (dispatch) => {
  const reviews = await fetch(`/api/reviews/`);
  const data = await reviews.json();
  const formattedData = data.reviews;
  dispatch(showReviews(formattedData));
};

export const getOneReview = (id) => async (dispatch) => {
  const review = await fetch(`/api/reviews/${id}/`);
  const data = await review.json();
  dispatch(showOneReview(data));
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
      action.payload.specificProdReview.forEach((review,index) => newState[index] = review )
      return newState;
    default:
      return state;
  }
}
