import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/review";
import "./UserReviews.css";
import EditReviewModal from "./EditReviewModal/EditReviewModal";

function UserReviews({currentUserReview, reviewInfo}) {
    const dispatch = useDispatch()

    const onDeleteReview = async (e) => {
      e.preventDefault();
      dispatch(deleteReview(reviewInfo.user_id, reviewInfo.product_id));
    };

    return (
      <div className="userReviews_container">
        <div className="userReviews__user">
          <span>
            {reviewInfo.user_first_name} {reviewInfo.user_last_name}
          </span>
        </div>
        <div className="userReviews_rating">
          {Array(5)
            .fill()
            .map((_, i) => {
              let currentRating = i + 1;
              return (
                <p key={i}>
                  <i
                    key={i}
                    className={`fas fa-star ${
                      currentRating <= reviewInfo.rating
                        ? `star-yellow`
                        : `star-gray`
                    }`}
                  ></i>
                </p>
              );
            })}
          <span className="userReviews__headline">{reviewInfo.headline}</span>
        </div>
        <p></p>
        <span className="usersReviews__date">
          Reviewed on {reviewInfo.updated_at}
        </span>
        <span className="usersReviews__verified">Verified Purchase</span>
        <div className="userReviews__review">
          <span className="userReviews__review__body">{reviewInfo.body}</span>
        </div>
        {currentUserReview ? (
          <div className="userReviews_review_buttons">
            <button
              className="userReviews_review_buttons_delete"
              onClick={onDeleteReview}
              type="submit"
            >
              Delete Your Review
            </button>
            <EditReviewModal reviewInfo={reviewInfo} />
          </div>
        ) : null}
      </div>
    );
}

export default UserReviews
