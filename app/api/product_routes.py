from flask import Blueprint, jsonify
from app.models import Product, Review

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

