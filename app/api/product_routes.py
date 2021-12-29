from flask import Blueprint, jsonify, request
from app.models import Product, Review, db
from app.forms.review_form import ReviewForm

product_routes = Blueprint('products', __name__)


@product_routes.route('/')
def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}


@product_routes.route('/<int:id>/')
def product(id):
    product = Product.query.get(id)
    return product.solo_product()

@product_routes.route('/<int:id>/reviews/')
def review(id):
    allReviewsOneProduct = Review.query.filter(Review.product_id == id).order_by(Review.updated_at.desc()).all()
    return {'specificProdReview': [indivReview.to_dict() for indivReview in allReviewsOneProduct]}

@product_routes.route('/<int:id>/reviews/new/', methods=['POST'])
def addReview(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data['user_id'],
            product_id=form.data['product_id'],
            headline=form.data['headline'],
            body=form.data['body'],
            rating=form.data['rating'],
        )
        db.session.add(review)
        db.session.commit()
        return 'FINISHED POSTING!'
    return 'This failed!'

@product_routes.route('/<int:id>/reviews/<int:userId>/delete/', methods=['DELETE'])
def deleteReview(id, userId):
    review = Review.query.filter(Review.product_id == id, Review.user_id == userId).first()
    db.session.delete(review)
    db.session.commit()
    return {'Message': f"Review {id} was deleted!"}

@product_routes.route('/<int:id>/reviews/<int:userId>/edit/', methods=['PATCH'])
def editReview(id, userId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        fetchReview = Review.query.filter(Review.product_id == id, Review.user_id == userId).first()
        fetchReview.headline=form.data['headline']
        fetchReview.body=form.data['body']
        fetchReview.rating=form.data['rating']
        db.session.commit()
        return 'FINISHED EDITING!'
    return 'This failed!'
