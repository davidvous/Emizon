from flask import Blueprint, jsonify
from app.models import Cart_item

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/')
def all_cart():
    all_cart = Cart_item.query.all()
    return {'Cart': [each.to_dict() for each in all_cart]}


@cart_routes.route('/<int:id>')
def cart(id):
    cart = Cart_item.query.filter(Cart_item.user_id == id).all()
    return {'Cart_item': [each.to_dict() for each in cart]}
