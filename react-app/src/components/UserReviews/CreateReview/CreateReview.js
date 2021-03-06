import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addAReview, uploadFile } from '../../../store/review'
import '../ReviewModal.css'

function CreateReview({ productId, user, setShowModal }) {
  let [errors, setErrors] = useState([]);
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(3);
  const [reviewImg, setReviewImg] = useState("");
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
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        // addAReview(productId, user.id, headline, body, rating)
        uploadFile(productId, user.id, headline, body, rating, reviewImg)
      );
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
  const updateReviewImg = (e) => {
    setReviewImg(e.target.files[0]);
  };

  return (
    <form className="signUpForm">
      <img
        alt="userlogo"
        src="https://cdn.discordapp.com/attachments/920474033932349511/927560040309751828/emizon_logo.png"
      />
      <div className="signUpContent">
        <h1>Leave a Review!</h1>
        {validationErrors.length > 0 && (
          <div className="validationErrors">
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
          <label className="reviewImgText" htmlFor="reviewImage">Leave a photo review:</label>
          <input onChange={updateReviewImg} className="reviewImgText" type="file" id="avatar" name="reviewImage" accept="image/png, image/jpeg"></input>
        </div>
      </div>
      <button onClick={onCreate} type="submit" className="signUpContent-btn">
        Finished
      </button>
    </form>
  );
}

export default CreateReview
