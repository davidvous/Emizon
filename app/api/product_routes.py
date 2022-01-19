import boto3
import botocore
from flask import Blueprint, jsonify, request

from app.config import Config
from app.aws_s3 import *

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
def addReviewWithFile(id):

    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]

    if file:
        file_url = upload_file_to_s3(file, Config.S3_BUCKET)
        file = Review(
            user_id=request.form.get('user_id'),
            product_id=request.form.get('product_id'),
            headline=request.form.get('headline'),
            body=request.form.get('body'),
            rating=request.form.get('rating'),
            reviewImg=file_url
            )  
        db.session.add(file)  
        db.session.commit()
        return {'Added_Review': file.to_dict()}
    else:
        return 'No File Attached!' 

@product_routes.route('/<int:id>/reviews/<int:userId>/delete/', methods=['DELETE'])
def deleteReview(id, userId):
    review = Review.query.filter(Review.product_id == id, Review.user_id == userId).first()
    reviewKey = str(review.reviewImg[37:])
    delete_s3_file(Config.S3_BUCKET, reviewKey)
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
        return {'Edited_Review': fetchReview.to_dict()}
    return 'This failed!'
