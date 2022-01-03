import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../../store/review";
import "../ReviewModal.css";

function EditReview({ reviewInfo, setShowModal}) {
  let [errors, setErrors] = useState([]);
  const [headline, setHeadline] = useState(reviewInfo.headline);
  const [body, setBody] = useState(reviewInfo.body);
  const [rating, setRating] = useState(reviewInfo.rating);
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();

  const validate = () => {
    const validateErrors = [];

    if (!headline) validateErrors.push("Please enter a title/headline");
    if (!body) validateErrors.push("Please enter a review");

    return validateErrors;
  };

  const onEdit = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        editReview(
          reviewInfo.product_id,
          reviewInfo.user_id,
          headline,
          body,
          rating
        ));
        setShowModal(false);
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateHeadline = (e) => {
    setHeadline(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };
  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form className="signUpForm">
      <img
        alt="userlogo"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      />
      <div className="signUpContent">
        <h1>Edit Review</h1>
        {validationErrors.length > 0 && (
          <div className="validationErrors">
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div></div>
        <div>
          <input
            type="text"
            name="headline"
            placeholder="headline"
            onChange={updateHeadline}
            value={headline}
          ></input>
        </div>
        <div>
          <textarea
            name="body"
            placeholder="body"
            onChange={updateBody}
            value={body}
          ></textarea>
        </div>
        <div>
          <div className="numeric__ratings">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
          </div>
          <input
            type="range"
            name="rating"
            placeholder="rating"
            min="1"
            max="5"
            onChange={updateRating}
            value={rating}
          ></input>
        </div>
      </div>
      <button onClick={onEdit} type="submit" className="signUpContent-btn">
        Finished
      </button>
    </form>
  );
}

export default EditReview;
