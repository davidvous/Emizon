import './ReviewBreakdown.css'

function ReviewBreakdown({review, averageRating}) {
    const ratingMap = {5: 0, 4: 0, 3: 0, 2: 0, 1:0}
    review.forEach((ele,i) => (ele.rating in ratingMap) ? ratingMap[ele.rating]++ : null)
    console.log(ratingMap)

    return (
      <div className="reviewBreakdown__container">
        <h2>Customer Reviews</h2>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((_, i) => {
              let currentRating = i + 1;
              return (
                <p key={i}>
                  <i
                    key={i}
                    className={`fas fa-star ${
                      currentRating <= averageRating
                        ? `star-yellow`
                        : `star-gray`
                    }`}
                  ></i>
                </p>
              );
            })}
          <h4 className="reviewBreakdown__outOf">
            {averageRating ? Math.floor(averageRating) : 0} out of 5
          </h4>
        </div>
        <span className="reviewBreakdown__totalRatings">
          {review.length} total ratings
        </span>
        {Array(5)
          .fill()
          .map((_, index) => (
            <div className="reviewBreakdown_indivBreakdown">
              <span className="reviewBreakDown__smallText">
                {index + 1} star
              </span>
              <div className="reviewBreakdown__indivBreakdown__outerProgress">
                <span
                  className="reviewBreakdown__indivBreakdown__innerProgress"
                  style={{ width: `${(ratingMap[index + 1] / review.length) * 100}%` }}
                ></span>
              </div>
              <span className="reviewBreakDown__smallText">
                {(ratingMap[index + 1] / review.length) * 100} %
              </span>
            </div>
          )).reverse()}
      </div>
    );
}

export default ReviewBreakdown
