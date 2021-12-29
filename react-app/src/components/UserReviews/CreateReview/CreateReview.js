import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addAReview } from '../../../store/review'
import '../ReviewModal.css'

function CreateReview({ productId, user, setShowModal }) {
  const [errors, setErrors] = useState([]);
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(3);
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();

  const validate = () => {
    const validateErrors = [];

    if (!headline) validateErrors.push("Please enter a title/headline");
    if (!body) validateErrors.push("Please enter a review");

    return validateErrors;
  };

  const onCreate = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        addAReview(productId, user.id, headline, body, rating)
      );
      setShowModal(false);
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
        <h1>Leave a Review!</h1>
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
            placeholder="Title of Your Review"
            onChange={updateHeadline}
            value={headline}
          ></input>
        </div>
        <div>
          <textarea
            name="body"
            placeholder="What did you think of this product?"
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
      <button onClick={onCreate} type="submit" className="signUpContent-btn">
        Finished
      </button>
    </form>
  );
}

export default CreateReview
