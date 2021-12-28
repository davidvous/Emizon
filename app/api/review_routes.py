from flask import Blueprint, jsonify, request
from app.models import Review

review_routes = Blueprint('review', __name__)

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews': [indivReview.to_dict() for indivReview in reviews]}



