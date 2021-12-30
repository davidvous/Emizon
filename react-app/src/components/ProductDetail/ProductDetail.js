import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOneProduct } from '../../store/products'
import { getOneReview } from '../../store/review'
import './ProductDetail.css'
import AddToCart from '../CartProduct/AddToCart'
import UserReviews from '../UserReviews/UserReviews'
import CreateReviewModal from '../UserReviews/CreateReviewModal/CreateReviewModal'
import ReviewBreakdown from '../ReviewBreakdown/ReviewBreakdown'

function ProductDetail() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const product = useSelector(state => state.products)
    const review = useSelector(state => Object.values(state.review))

    useEffect(()=> {
        (async () => {
        await dispatch(getOneProduct(productId));
        await dispatch(getOneReview(productId));
    })();
    },[dispatch, productId])

    const currentDate = () => {
        let today =  new Date();
        today.setDate(today.getDate() + 7);
        const options = { weekday: "long", month: "long", day: "numeric" };
        return today.toLocaleDateString("en-US", options)
    }
    const currentUserHasReview = review?.some((ele) => ele.user_id === user?.id);
    const manAvgRating =
      review?.reduce(function (sum, value) {
        return sum + value.rating;
      }, 0) / review?.length;

    return (
      <div className="product__detail__container product__detail__price">
        <div className="product__detail__nav product__detail__price">
          <Link to="/" exact="true">
            Home
          </Link>
          <span>></span>
          <span>{product?.[productId]?.department}</span>
        </div>
        <div className="product_detail__top">
          <div className="product__detail__top__left">
            <img
              alt="product__detail__image"
              className="product__detail__image"
              src={`${product?.[productId]?.product_url}`}
            />
          </div>
          <div className="product__detail__top__middle">
            <h1>{product?.[productId]?.name} </h1>
            <div className="product__detail__ratings">
              <div className="product__detail__ratings__left">
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
                              currentRating <= manAvgRating
                                ? `star-yellow`
                                : `star-gray`
                            }`}
                          ></i>
                        </p>
                      );
                    })}
                </div>
                <span className="product__detail__priceReturns">
                  {review.length} ratings
                </span>
              </div>
              <div className="product__detail__divider" />
              <div className="product__detail__price">
                <span>Price: </span>
                <span className="product__detail__priceInfo">{`$${product?.[productId]?.price}`}</span>
                <span className="product__detail__priceText"> &</span>
                <span className="product__detail__priceReturns">
                  {" "}
                  FREE RETURNS
                </span>
              </div>
              <div className="product__detail__description">
                <span>
                  <b>Item Description</b>
                </span>
                <p></p>
                <span> {product?.[productId]?.description}</span>
              </div>
            </div>
          </div>
          <div className="product__detail__top__right">
            <span className="product__detail__priceInfo">{`$${product?.[productId]?.price}`}</span>
            <div>
              <span className="product__detail__priceText"> &</span>
              <span className="product__detail__priceReturns">
                {" "}
                FREE RETURNS
              </span>
            </div>
            <br></br>
            <span className="product__detail__priceReturns">
              {" "}
              FREE DELIVERY:
              <span>{currentDate()}</span>
            </span>
            <AddToCart user={user} productId={productId} />
          </div>
        </div>
        <div className="product__detail__divider" />
        <div className="product__detail__bottom">
          <div className="product__detail__bottom__left">
            <ReviewBreakdown review={review} averageRating={manAvgRating}/>
            {user
              ? [
                  currentUserHasReview ? null : (
                    <CreateReviewModal key={user.id} productId={productId} user={user} />
                  ),
                ]
              : null}
          </div>
          <div className="product__detail__bottom__right">
            {review.map((indiv, index) => (
              <UserReviews
                currentUserReview={indiv.user_id === user?.id}
                key={indiv.user_id}
                reviewInfo={indiv}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default ProductDetail
