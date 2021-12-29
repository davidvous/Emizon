import "./UserReviews.css";

function UserReviews({currentUserReview, reviewInfo}) {
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
        <span>{currentUserReview} sdfdsfdsfsd</span>
        <p></p>
        <span>Reviewed on {reviewInfo.updated_at}</span>
        <span>Verified Purchase</span>
        <div className="userReviews__review">{reviewInfo.body}</div>
      </div>
    );
}

export default UserReviews
