import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/review";
import "./UserReviews.css";

function UserReviews({currentUserReview, reviewInfo}) {
    const dispatch = useDispatch()

    const onDeleteReview = async (e) => {
      e.preventDefault();
      dispatch(deleteReview(reviewInfo.user_id, reviewInfo.product_id));
    };

    return (
      <div className="userReviews_container">
        <div className="userReviews__user">
          {reviewInfo.user_first_name} {reviewInfo.user_last_name}
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
          <span>{reviewInfo.headline}</span>
        </div>
        <p></p>
        <span>Reviewed on {reviewInfo.updated_at}</span>
        <span>Verified Purchase</span>
        <div className="userReviews__review">{reviewInfo.body}</div>
        {currentUserReview ? <button onClick={onDeleteReview} type="submit">
        Delete Your Review
      </button> : null}
      </div>
    );
}

export default UserReviews
