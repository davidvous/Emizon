import './ReviewBreakdown.css'

function ReviewBreakdown({review, totalReviews, averageRating}) {
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
          <h4 className="reviewBreakdown__outOf">{Math.floor(averageRating)} out of 5</h4>
        </div>
        <span className="reviewBreakdown__totalRatings">
          {totalReviews} total ratings
        </span>
        <div className="reviewBreakdown_indivBreakdown">
          <span className="product__detail__priceReturns">5 star</span>
          <div className="reviewBreakdown__indivBreakdown__outerProgress">
            <span
              className="reviewBreakdown__indivBreakdown__innerProgress"
              style={{ width: "80%"}}
            ></span>
          </div>
        </div>
        <div className="reviewBreakdown_indivBreakdown">
          <span className="product__detail__priceReturns">4 star</span>
          <div className="reviewBreakdown__indivBreakdown__outerProgress"></div>
        </div>
        <div className="reviewBreakdown_indivBreakdown">
          <span className="product__detail__priceReturns">3 star</span>
        </div>
        <div className="reviewBreakdown_indivBreakdown">
          <span className="product__detail__priceReturns">2 star</span>
        </div>
        <div className="reviewBreakdown_indivBreakdown">
          <span className="product__detail__priceReturns">1 star</span>
        </div>
      </div>
    );
}

export default ReviewBreakdown
