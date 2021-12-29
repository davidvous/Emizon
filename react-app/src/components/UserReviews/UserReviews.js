import "./UserReviews.css";

function UserReviews({reviewInfo}) {
    return (
      <div className="userReviews_container">
        <div className="userReviews__user">
          {reviewInfo.user_first_name} {reviewInfo.user_last_name}
        </div>
        <div className="userReviews_rating">{reviewInfo.rating}
        <span>{reviewInfo.headline}</span>
        </div>
        <span>Reviewed on {reviewInfo.created_at}</span>
        <span>Verified Purchase</span>
        <div className="userReviews__review">
            {reviewInfo.body}
        </div>
      </div>
    );
}

export default UserReviews
