import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { editReview } from "../../../store/review";

function EditReview({ reviewInfo, setShowModal}) {
  const [errors, setErrors] = useState([]);
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
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        editReview(
          reviewInfo.product_id,
          reviewInfo.user_id,
          headline,
          body,
          rating
        ))
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
      <img alt="userlogo" src={true} />
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
          <input
            type="range"
            name="rating"
            placeholder="rating"
            min="1"
            max="5"
            value="3"
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
