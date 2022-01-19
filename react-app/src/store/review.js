// constants
const GET_REVIEWS = "reviews/GET_REVIEWS";
const GET_ONE_PROD_REVIEW = "reviews/GET_ONE_PROD_REVIEW";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";

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

const removeReview = (payload) => {
  return {
    type: REMOVE_REVIEW,
    payload,
  };
};

const updateReview = (payload) => ({
  type: UPDATE_REVIEW,
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

export const deleteReview = (user, item) => async (dispatch) => {
  await fetch(`/api/products/${item}/reviews/${user}/delete/`, {
    method: "DELETE",
  });
  return dispatch(removeReview(user));
};

export const editReview = (item, user, headline, body, rating) => async (dispatch) => {
  const response = await fetch(`/api/products/${item}/reviews/${user}/edit/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({product_id:item, user_id:user, headline, body, rating} ),
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(updateReview(review));
    return review;
  }
};

export const uploadFile =
  (product_id, user_id, headline, body, rating, reviewImg) => async (dispatch) => {

    const form = new FormData();
    form.append("product_id", product_id);
    form.append("user_id", user_id);
    form.append("headline", headline);
    form.append("body", body);
    form.append("rating", rating);
    form.append("file", reviewImg);

    const response = await fetch(`/api/products/${product_id}/reviews/new/`, {
      method: "POST",
      body: form,
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
    case REMOVE_REVIEW:
      newState = { ...state };
      delete newState[action.payload]
      return newState;
    case UPDATE_REVIEW:
      newState = { ...state, [action.payload.Edited_Review.user_id]: action.payload.Edited_Review };
      return newState;
    default:
      return state;
  }
}
